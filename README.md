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
  - Kedvencek megtekintése
  - Kedvencek eltávolítása
  
* Kizárólag _**admin**_ felhasználó által elérhető funkciók:
  - Névjegy módosítása
  - Névjegy törlése
 
###Nem funkcionális követelmények:
* Áttekinthetőség: üzleti/személyeskét oszlopra bontva jelnnek meg a névjegyek böngészésnél
* Megbízhatóság: jelszóval védett funkciók, és a jelszavak védelme a háttérben történik. Hibásan bevitt adatok esetén a program jelezzen a felhasználónak, és emelje ki a hibás beviteli mezőket.

###Használatieset-modell diagram, funkcionális követelmények:
* Vendég: Csak a publikus oldalakat éri el:
  - Főoldal
  - Bejelentkezés
  - Regisztráció
  
* Bejelentkezett felhasználó: A publikus oldalak elérésén felül egyéb funkciókhoz is hozzáfér.
  - Új névjegy felvétele
  - Meglévő névjegyek megtekintése
  - Kedvencek hozzáadása
  - Kedvencek megtekintése
  - Kedvencek törlése
  
* Admin felhasználó: Az összes funkcióhoz hozzáfér (előbbieket kibővítve): 
  - Meglévő névjegy szerkesztése
  - Meglévő névjegy törlése
