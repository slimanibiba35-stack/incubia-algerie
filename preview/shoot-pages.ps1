# Before/after screenshots (desktop 1440 wide + mobile 390 wide) of the pages that get new photos.
# Usage: powershell -File preview/shoot-pages.ps1 -Name before   (preview server must run on :4000)
param([string]$Name, [string]$Base = 'http://localhost:4000')
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
$out = "$PSScriptRoot\screenshots\pages"
New-Item -ItemType Directory -Force $out | Out-Null
$pages = [ordered]@{
  'a-propos' = '/a-propos'; 'prospection-b2b' = '/services/commercial/prospection-b2b'
  'assistance-commerciale' = '/services/commercial/assistance-commerciale'; 'acceleration' = '/services/acceleration'
  'site-web' = '/services/digital/site-web'; 'publicite-digitale' = '/services/digital/publicite-digitale'
  'community-management' = '/services/digital/community-management'; 'formations' = '/services/formation'
  'contact' = '/contact'
}
foreach ($k in $pages.Keys) {
  $url = $Base + $pages[$k]
  $d = Join-Path $out "$k-$Name-desktop.png"
  node "$PSScriptRoot\shot-mobile.mjs" $url $d 1500 1440 | Out-Null
  node "$PSScriptRoot\shot-mobile.mjs" $url (Join-Path $out "$k-$Name-mobile.png") 1700 | Out-Null
  Write-Output "$k done"
}
