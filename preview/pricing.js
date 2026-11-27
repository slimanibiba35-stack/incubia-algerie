/* Tarifs — repositionnement pour le marché algérien (PROPOSITION, en aperçu uniquement).
   Tous les prix affichés sur /tarifs viennent de PRICING ci-dessous : c'est le seul endroit à modifier.
   À reporter dans le vrai code du site après validation par la direction (prix, rentabilité, offre B2B). */
(function () {
  const PRICING = {
    landingPage: 'Landing page à partir de 45 000 DA',
    cards: {
      'Site Web Professionnel': { label: 'À partir de', price: '89 000 DA' },
      'Assistance Commerciale': { label: 'À partir de', price: '49 000 DA', unit: '/ mission' },
      'Community Management': { label: 'Prix', price: '35 000 DA', unit: '/ mois' },
      'Accélération Entreprise': { label: 'À partir de', price: '95 000 DA', unit: '/ mission' },
      'Croissance 360': { label: 'Prix', price: 'Sur devis', unit: '' },
    },
    boost: {
      label: 'Frais de gestion Incubia',
      price: 'À partir de 55 000 DA',
      sub: '/ mois. Hors budget publicitaire. Budget média défini selon vos objectifs.',
    },
    table: {
      'Site Web Professionnel': 'À partir de 89 000 DA',
      'Présence Digitale & Boost Marketing': 'À partir de 55 000 DA / mois, hors budget publicitaire',
      'Community Management': '35 000 DA / mois',
      'Accélération Entreprise': 'À partir de 95 000 DA / mission',
      'Croissance 360': 'Sur devis',
    },
    // Nouvelle offre — à valider (périmètre, prix, horaires, conditions commerciales).
    b2b: {
      badge: 'Prospection',
      title: 'Prospection Commerciale B2B',
      text: 'Développez votre portefeuille clients en Algérie et à l’international grâce à un accompagnement commercial structuré.',
      label: 'À partir de', price: '120 000 DA', unit: '/ mois',
      items: [
        'Prospection commerciale en Algérie et à l’international',
        'Téléprospection B2B',
        'Objectif de 600 entreprises contactées par mois',
        'Prise de rendez-vous pour vos commerciaux',
        'Suivi via notre plateforme CRM',
        'Briefings, visioconférences et suivi des actions',
        'Horaires B2B : du dimanche au jeudi, de 9 h à 17 h',
      ],
      cta: 'Développer mon portefeuille clients',
      href: '/services/commercial/prospection-b2b',
      tableNeed: 'Développer son portefeuille clients B2B',
      tableGoal: 'Structurer et suivre la prospection commerciale',
    },
    // Calculateur : les frais de gestion Incubia ne descendent jamais sous ce plancher (décision du 26/11/2026).
    feeFloor: 55000,
  };
  window.INCUBIA_PRICING = PRICING;

  const fmt = n => `${new Intl.NumberFormat('fr-FR').format(5000 * Math.round(n / 5000))} DA`;
  const num = s => Number(String(s).replace(/[^\d]/g, '')) || 0;
  const leaf = (root, re) => [...root.querySelectorAll('*')].find(e => e.children.length === 0 && re.test(e.textContent.trim()));
  const card = title => { const h = [...document.querySelectorAll('main article h3')].find(h => h.textContent.trim() === title); return h && h.closest('article'); };
  const setText = (el, t) => { if (el && el.textContent !== t) el.textContent = t; };

  function setPrice(art, p) {
    const box = art.querySelector('.mb-5 .text-3xl');
    if (!box) return;
    setText(box.closest('.mb-5').firstElementChild, p.label);
    setText(box, p.price);
    const unit = box.nextElementSibling;
    if (unit) { setText(unit, p.unit || ''); unit.hidden = !p.unit; }
    else if (p.unit) box.insertAdjacentHTML('afterend', `<span class="text-sm font-semibold text-[#47534E]">${p.unit}</span>`);
  }

  function cards() {
    for (const [title, p] of Object.entries(PRICING.cards)) { const a = card(title); if (a) setPrice(a, p); }
    const web = card('Site Web Professionnel');
    if (web) setText(web.querySelector('.mt-auto p'), PRICING.landingPage);

    const assist = card('Assistance Commerciale');
    if (assist && !document.querySelector('[data-ip-b2b]') && getComputedStyle(assist).opacity === '1') {
      const b = PRICING.b2b, n = assist.cloneNode(true);
      n.setAttribute('data-ip-b2b', '');
      n.style.opacity = '1'; n.style.transform = 'none';
      const badge = n.querySelector('h3').previousElementSibling;
      if (badge) badge.textContent = b.badge;
      n.querySelector('h3').textContent = b.title;
      n.querySelector('h3').nextElementSibling.textContent = b.text;
      setPrice(n, b);
      const ul = n.querySelector('ul'), li = ul.querySelector('li');
      ul.replaceChildren(...b.items.map(t => { const c = li.cloneNode(true); c.querySelector('span').textContent = t; return c; }));
      const a = n.querySelector('.mt-auto a'); a.textContent = b.cta; a.setAttribute('href', b.href);
      const note = n.querySelector('.mt-auto p'); if (note) note.remove();
      assist.after(n);
    }
  }

  function boost() {
    const h = [...document.querySelectorAll('main h3')].find(h => h.textContent.includes('Présence Digitale'));
    const box = h && h.parentElement.nextElementSibling;
    if (!box) return;
    const lbl = leaf(box, /^(Budget estimatif|Frais de gestion Incubia)$/i);
    setText(lbl, PRICING.boost.label);
    setText(box.querySelector('.font-bold.mb-1'), PRICING.boost.price);
    setText(box.querySelector('.text-white\\/60'), PRICING.boost.sub);
  }

  function table() {
    const rows = [...document.querySelectorAll('main table tbody tr')];
    for (const r of rows) {
      const name = r.cells[0] && r.cells[0].textContent.trim();
      if (PRICING.table[name]) setText(r.cells[2], PRICING.table[name]);
    }
    const web = rows.find(r => r.cells[0] && r.cells[0].textContent.trim() === 'Site Web Professionnel');
    if (web && !document.querySelector('[data-ip-b2b-row]')) {
      const b = PRICING.b2b, n = web.cloneNode(true);
      n.setAttribute('data-ip-b2b-row', '');
      [b.title, b.tableNeed, `${b.label} ${b.price} ${b.unit}`, b.tableGoal].forEach((t, i) => { n.cells[i].textContent = t; });
      web.after(n);
    }
  }

  // Calculateur : même calcul qu'avant, mais frais de gestion >= plancher. Le site garde t = base, fourchette t±10 000.
  const calc = { lowFee: 0, highFee: 0, oldLow: '', oldHigh: '', newLow: '', newHigh: '' };
  function calculator() {
    const feeLabel = leaf(document, /^Gestion Incubia$/);
    const budgetLabel = leaf(document, /^Budget sponsorisé conseillé$/);
    const totalLabel = leaf(document, /^Total mensuel estimé$/i);
    if (!feeLabel || !budgetLabel || !totalLabel) return;
    const feeEl = feeLabel.nextElementSibling, totalEl = totalLabel.nextElementSibling;
    const budget = num(budgetLabel.nextElementSibling.textContent);
    // Valeur d'origine du site (avant correction) : on relit la borne haute, qui vaut t + 10 000.
    const parts = feeEl.textContent.split('—').map(num);
    let high = parts[1];
    if (feeEl.dataset.ipFee === feeEl.textContent) high = Number(feeEl.dataset.ipHigh); // déjà corrigé
    const t = high - 10000;
    const lowFee = Math.max(PRICING.feeFloor, t - 10000);
    const highFee = Math.max(t + 10000, lowFee + 10000);
    const feeTxt = `${fmt(lowFee)} — ${fmt(highFee)}`;
    calc.oldLow = fmt(Math.max(35000, t - 10000) + budget); calc.oldHigh = fmt(t + 10000 + budget);
    calc.newLow = fmt(lowFee + budget); calc.newHigh = fmt(highFee + budget);
    if (feeEl.textContent !== feeTxt) { feeEl.textContent = feeTxt; }
    feeEl.dataset.ipFee = feeTxt; feeEl.dataset.ipHigh = String(t + 10000);
    setText(totalEl, `${calc.newLow} — ${calc.newHigh}`);
    const pack = leaf(document, /^(Starter|Growth|Performance) Boost$/);
    const total = highFee + budget;
    setText(pack, total >= 280000 ? 'Performance Boost' : total >= 160000 ? 'Growth Boost' : 'Starter Boost');
    // Message WhatsApp et copie : même estimation que celle affichée.
    const send = [...document.querySelectorAll('main a[href^="https://wa.me/"]')].find(a => a.textContent.includes('Envoyer la demande'));
    if (send) {
      const u = new URL(send.href), m = u.searchParams.get('text') || '';
      const fixed = m.replace(/Estimation affich[ée]e : .*? \/ mois/, `Estimation affichée : ${calc.newLow} — ${calc.newHigh} / mois`);
      if (fixed !== m) { u.searchParams.set('text', fixed); send.href = u.toString(); }
    }
  }
  if (navigator.clipboard && !navigator.clipboard.__ip) {
    const orig = navigator.clipboard.writeText.bind(navigator.clipboard);
    navigator.clipboard.writeText = t => orig(location.pathname.replace(/\/$/, '') === '/tarifs' && calc.newLow
      ? String(t).replace(/Estimation affich[ée]e : .*? \/ mois/, `Estimation affichée : ${calc.newLow} — ${calc.newHigh} / mois`) : t);
    navigator.clipboard.__ip = true;
  }

  function apply() {
    if ((location.pathname.replace(/\/$/, '') || '/') !== '/tarifs') return;
    cards(); boost(); table(); calculator();
  }
  setTimeout(apply, 300);
  setInterval(apply, 400);
  document.addEventListener('input', () => setTimeout(apply, 0), true);
  document.addEventListener('click', () => setTimeout(apply, 0), true);
})();
