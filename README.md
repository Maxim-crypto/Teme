# Teme lab 2
# Campus Info Hub

## 1. Ce este o resursă (resource) în aplicația ta?
O resursă în aplicația mea este orice element important din campus care poate fi accesat de student și despre care putem afișa informații. Exemple: biblioteca, cantina, sala de evenimente sau laboratorul IT.

## 2. Dă exemplu de un URI și explică componentele acestuia.
Exemplu de URI: `/pages/library.html#schedule`

Componente:
- `/pages/` = folderul în care se află pagina
- `library.html` = numele fișierului HTML
- `#schedule` = fragment identifier, care duce direct la secțiunea de program din pagină

## 3. Care părți sunt statice și care sunt dinamice?
Părți statice:
- paginile HTML
- meniul de navigare
- textele fixe despre bibliotecă, cantină și evenimente
- stilizarea CSS

Părți dinamice:
- încărcarea datelor din fișierul `resources.json`
- afișarea listei de resurse cu JavaScript
- filtrarea resurselor de tip `study`
- generarea tag-urilor/categoriilor

## 4. Este aplicația ta document-centric sau interactive (sau ambele)? De ce?
Aplicația este ambele. Este document-centric deoarece conține pagini informative despre resursele campusului. Este și interactive deoarece folosește JavaScript pentru a încărca și afișa date din JSON în mod dinamic.
