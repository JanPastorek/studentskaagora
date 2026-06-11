# Ako upravovať web

Nepotrebuješ vedieť programovať. Všetok text a obrázky sú v dvoch priečinkoch:

- `content/` — textový obsah (jeden súbor na sekciu)
- `public/images/` — obrázky

Po každej zmene na GitHube sa web automaticky prebuduje a je živý do ~2 minút.

---

## Súbory obsahu

| Súbor | Čo upravuje |
|---|---|
| `content/nav.md` | Logo, navigačné odkazy |
| `content/hero.md` | Úvodná sekcia (nadpis, podnadpis, tlačidlo, citát) |
| `content/stats.md` | Štyri fakty pod hero sekciou (kde, pre koho, čo ťa čaká, školné) |
| `content/about.md` | Sekcia „Prečo Agora?" |
| `content/topics.md` | 10 téma tutoriálov (flipovacie karty) |
| `content/team.md` | Tváre Agory (fotky, mená, roly) |
| `content/why-apply.md` | Prečo sa prihlásiť (zoznam s fajkami) |
| `content/apply.md` | Prihláška (deadline, email, tlačidlo) |
| `content/footer.md` | Pätička (logo, copyright, odkazy) |

---

## Ako upravovať text

1. Otvor priečinok `content/` na GitHube.
2. Klikni na súbor sekcie, ktorú chceš zmeniť.
3. Klikni na ikonu ceruzky (✏️) vpravo hore.
4. Uprav text.
5. Dole napíš poznámku, napr. „zmena termínu", klikni **Commit changes**.
6. Počkaj ~2 minúty. Web sa sám aktualizuje.

### Formátovanie textu

- `**tučný text**` → **tučný text**
- `*kurzíva*` → *kurzíva*
- Prázdny riadok = nový odsek
- `[text odkazu](https://example.com)` = klikateľný odkaz

Časti medzi `---` znakmi na začiatku súboru (tzv. „frontmatter") sú nastavenia. Zachovaj štruktúru a meň len text za dvojbodkou:

```yaml
---
deadline: 18. október 2025    ← zmeň toto
fee: "100 €"                  ← zmeň toto
---
```

---

## Zmena obrázka

1. **Nahraj nový obrázok:** otvor `public/images/` → **Add file** → **Upload files** → pretiahni obrázok → **Commit changes**.
   - Použi malé písmená bez medzier: `andrej-2025.jpg`, nie `Andrej 2025.JPG`.
   - JPG alebo PNG, ideálne pod 2 MB.
2. **Odkazuj na nový obrázok** v príslušnom `.md` súbore:

   ```yaml
   image: /images/andrej-2025.jpg
   ```

3. Ulož (commit). Web sa aktualizuje do ~2 minút.

### Obrázky, ktoré treba pridať

Tieto obrázky zatiaľ nie sú v repozitári — nahraj ich do `public/images/`:

| Súbor | Sekcia |
|---|---|
| `hero-statue.png` | Socha/ilustrácia v hero sekcii |
| `preco-agora.png` | Obrázok v sekcii „Prečo Agora?" |
| `preco-sa-prihlasit.png` | Obrázok v sekcii „Prečo sa prihlásiť?" |

---

## Úprava tímu

Otvor `content/team.md`. Každý člen vyzerá takto:

```yaml
- name: Mgr. Ján Pastorek
  role: Tútor a akademický tím
  image: /images/jan.png
  accentColor: orange   # modrá farba pozadia: blue, orange, yellow
```

Hodnoty `accentColor`: `blue`, `orange`, `yellow`.

Ak chceš **pridať** člena, skopíruj blok, vlož ho pod ostatných, zmeň polia. Nezabudni nahrať fotku do `public/images/`.

Ak chceš **odobrať** člena, vymaž jeho riadky (od `- name:` po koniec bloku).

**Odsadenie (medzery) je dôležité** — zachovaj rovnaké ako ostatné záznamy.

---

## Úprava tém (flip karty)

Otvor `content/topics.md`. Každá téma:

```yaml
- name: Existencia
  question: Čo znamená žiť naplno?
  bgFront: card-cream    # farba prednej strany karty
  textFront: dark
  bgBack: blue           # farba zadnej strany karty
  textBack: white
```

Dostupné farby: `card-cream`, `blue`, `yellow`, `orange-dark`.

---

## Aktualizácia prihlášky

Otvor `content/apply.md`. Zmeň `deadline`, `fee`, `applicationEmail` v hornej časti.

---

## Keď niečo nevyzerá dobre

1. Otvor záložku **Actions** na GitHube.
2. Červená ❌ = chyba pri buildovaní.
3. Klikni na ňu a pozri chybu. Bežné príčiny:
   - Chýba `---` na začiatku `.md` súboru.
   - Nesprávne odsadenie v YAML zozname.
   - Obrázok, ktorý neexistuje v `public/images/`.
4. Oprav súbor, commit. Build sa zopakuje.

Ak si stratený/á — v histórii commitov môžeš kliknúť na starší commit a zrevertovať zmenu.
