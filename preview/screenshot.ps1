# Captures desktop + mobile screenshots of a URL with headless Edge.
# Usage: powershell -File preview/screenshot.ps1 -Url http://localhost:4000 -Name after
param([string]$Url, [string]$Name, [string]$Out = "$PSScriptRoot\screenshots", [switch]$Full)
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
New-Item -ItemType Directory -Force $Out | Out-Null
# Real screen sizes (first screen). -Full = tall capture to show following sections.
# Desktop only: headless Edge can't go below ~500px wide. For mobile use preview/shot-mobile.mjs.
$sizes = if ($Full) { @{ 'desktop-full' = '1440,3400' } } else { @{ desktop = '1440,900' } }
foreach ($k in $sizes.Keys) {
  $file = Join-Path $Out "$Name-$k.png"
  $ua = if ($k -like 'mobile*') { '--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148' } else { '' }
  & $edge --headless=new --disable-gpu --hide-scrollbars "--window-size=$($sizes[$k])" --virtual-time-budget=9000 $ua "--screenshot=$file" $Url 2>$null | Out-Null
  Write-Output "$file $((Get-Item $file).Length)"
}
