@echo off
title Dong Bo TutorHub Len GitHub Pages
chcp 65001 >nul
cls
cd /d "%~dp0"
echo ==============================================================
echo    DANG DONG BO DU LIEU TUTORHUB LEN GITHUB PAGES...
echo ==============================================================
git add .
git commit -m "Cap nhat du lieu buoi day & hoc phi gia su"
echo Dang day len GitHub...
git push origin main
echo.
echo ==============================================================
echo    DA CAP NHAT LEN GITHUB PAGES THANH CONG!
echo ==============================================================
echo  Link web online 24/7 de mo tren dien thoai va gui phu huynh:
echo  https://hoang030206dz-cyber.github.io/tutor-hub/
echo ==============================================================
pause
