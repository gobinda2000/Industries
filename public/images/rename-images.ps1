# PowerShell script to rename images for GK Pvt Industries website
# Run this script from the public/images directory

Write-Host "Renaming images for GK Pvt Industries website..." -ForegroundColor Green

# You may need to adjust these mappings based on which image is which:
# 1. truck-1.jpg - Orange truck with PB GK 115 (likely the webp file or one of the screenshots)
# 2. steel-products.jpg - Steel nuts/products (likely one of the screenshots)
# 3. workshop.jpg - Industrial workshop (likely one of the screenshots)
# 4. building.jpg - GK Industries building (likely one of the screenshots)

Write-Host ""
Write-Host "Please manually rename your images as follows:" -ForegroundColor Yellow
Write-Host "  truck-1.jpg       - Your orange truck image (PB GK 115)" -ForegroundColor Cyan
Write-Host "  steel-products.jpg - Steel nuts/products image" -ForegroundColor Cyan
Write-Host "  workshop.jpg      - Industrial workshop image" -ForegroundColor Cyan
Write-Host "  building.jpg      - GK Industries building image" -ForegroundColor Cyan
Write-Host ""
Write-Host "Current files in directory:" -ForegroundColor Yellow
Get-ChildItem -File | Select-Object Name, Length, LastWriteTime | Format-Table

