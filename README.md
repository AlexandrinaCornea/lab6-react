## Sarcină

Implementați un joc de tip **Hangman** (Spânzurătoarea) utilizând React.

## Cerințe

1. Jocul trebuie să selecteze un cuvânt aleatoriu dintr-o listă predefinită, iar jucătorul ghicește litere. La fiecare literă greșită, se desenează o nouă parte a spânzurătorii. Jocul se termină cu victorie (toate literele ghicite) sau înfrângere (desenul complet).
2. Datele necesare jocului (lista de cuvinte, literele alfabetului, URL-urile imaginilor pentru stadii) sunt deja furnizate în directorul `constants/`. Importați și utilizați aceste date în componentele voastre.
3. Definiți componente cât mai generice care primesc date prin **props**. 
4. Jocul trebuie să ofere feedback vizual clar:
   - Literele deja ghicite trebuie dezactivate
   - La final, literele neghicite și cele corecte trebuie evidențiate diferit (ex: roșu/verde)
   - Mesaj de victorie sau înfrângere
   - Posibilitatea de a reporni jocul

## Un exemplu de implementare a jocului îl găsiți [aici](https://react-at2.vercel.app/)
