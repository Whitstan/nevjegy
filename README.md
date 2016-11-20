# **Dokumentáció**

## Névjegyek kezelését biztosító alkalmazás

### Készítette: Horváth Attila
------

##**Követelmények**
A program fő célja, hogy üzleti -illetve személyes névjegyeket tudjunk megtekinteni, létrehozni, szabadon böngészni közöttük, kedvenceket hozzáadni, melyeket később egyszerűen elérhetünk.

###Funkcionális követelmények:
* _**Mindenki**_ által elérhető funkciók:
  - Szabad böngészés
  - Névjegy megtekintése
  
* Csak _**bejelentkezett**_ felhasználók számára elérhető funckiók:
  - Névjegy létrehozása
  - Kedvencek hozzáadása
  - Kedvencek eltávolítása
  
* Kizárólag _**admin**_ felhasználó által elérhető funkciók:
  - Névjegy módosítása
  - Névjegy törlése
 
###Nem funkcionális követelmények:
* Áttekinthetőség: üzleti/személyeskét oszlopra bontva jelnnek meg a névjegyek böngészésnél
* Megbízhatóság: jelszóval védett funkciók, és a jelszavak védelme a háttérben történik. Hibásan bevitt adatok esetén a program jelezzen a felhasználónak, és emelje ki a hibás beviteli mezőket.

###Használatieset-modell, funkcionális követelmények:
* Vendég: Csak a publikus oldalakat éri el:
  - Főoldal
  - Bejelentkezés
  - Névjegyek megtekintése
  - Regisztráció
  
* Bejelentkezett felhasználó: A publikus oldalak elérésén felül egyéb funkciókhoz is hozzáfér.
  - Névjegy létrehozása
  - Kedvencek hozzáadása
  - Kedvencek törlése
  
* Admin felhasználó: Az összes funkcióhoz hozzáfér (előbbieket kibővítve): 
  - Névjegy szerkesztése
  - Névjegy törlése
  
#### Használatieset-modell:
![use_case_model](https://github.com/Whitstan/nevjegy/blob/master/Images/use_case.png "use_case_model")

####Egy névjegy létrehozásának folyamata:

* A felhasználó az oldalra érkezve, bejelentkezik vagy regisztrál
* Regisztráció után kiválasztja a "Névjegy létrehozása" menüpontot
* Kitölti az űrlap adatait a megfelelő adatokkal
* Esetlegesen a "Mégse" gombra kattintva törölheti az űrlap adatait, ha hibázott
* Befejezés gombra kattintva létrehozza a névjegyet

##Oldaltérkép

**Publikus**
  - Főoldal
  - Névjegyek megtekintése
  - Névjegyek keresése
  - Regisztráció
  - Bejelentkezés
 
**Regisztrált felhasználók számára:**
  - Főoldal
  - Névjegyek megtekintése
    - Kedvencek hozzáadása
    - Kedvencek eltávolítása
  - Névjegyek keresése
  - Névjegy létrehozása
  - Kedvencek megtekintése
  
**Admin felhasználók számára:**
  - Főoldal
  - Névjegyek megtekintése
    - Névjegy szerkesztése
    - Névjegy törlése
    - Kedvencek hozzáadása
    - Kedvencek eltávolítása
  - Névjegyek keresése
  - Névjegy létrehozása
  - Kedvencek megtekintése
  
##Végpontok

  - GET/ - Főoldal
  - GET/cards/create - Névjegy létrehozásához szükséges űrlap elérése
  - POST/cards/create - Új névjegy adatainak felküldése
  - GET/cards/:id/edit - Névjegy szerkesztéséhez szükséges űrlap elérése
  - POST/cards/:id/edit - Névjegy szerkesztett adatainak felküldése
  - GET/cards/:id/delete - Névjegy törlése
  - GET/cards/:id/add_favorite - Kedvenc hozzáadása
  - GET/cards/favorites - Kedvencek listázása
  - GET/cards/:id/remove_favorite - Kedvenc eltávolítása
  - GET/cards - Névjegy keresése
  - GET/cards/:id - Adott névjegy megtekintése
  - GET/register - Regisztrációs űrlap elérése
  - POST/register - Regisztrációs adatok felküldése
  - GET/login - Bejelentkezési felület elérése
  - POST/login - Felhasználó adatainak felküldése
  - GET/logout - Kijelentkezés
  
  
