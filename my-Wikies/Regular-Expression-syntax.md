## _<p align=center>Quick Reference:</p>_ _<p align=center>A simple description of the [Regular Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) syntax</p>_
_<p align=center>/ (^**Enjoy,**\s[A-Z][a-z]+**!**)\s([:kissing_closed_eyes:]{1000,}[:grin:]?)([\s\S]*)$ /gm;</p>_


***
Regular expressions are patterns of character combinations. They are most often used to **validate** input data strings or to **match**, **replace**, **extract** or **split** data from a text by pattern. In JavaScript, regular expressions are also objects from JS Global Standard Built-in objects - RegExp. Regular expressions vary between programming languages. Of course, there’s a lot in common, but they are somewhat different in Perl, Ruby, PHP, etc. For long and complex regular expressions, comments are recommended!

> :bangbang: There are some basic things to learn regular expression syntax: **Modifiers**(Флагове), **Patterns**(Модели) including: **Sets**, **Ranges**, **Metacharacters**, **Groups**, **Anchors** and **Quantifiers**!

## :sparkles: Basic syntax:
### 1. Declaring:
##### * Literal - short syntax `/.../`
> ```javascript
> /pattern/flags;
>```
##### * Constructor - dynamically syntax `(...)`
> ```javascript
> new RegExp(pattern[, flags]);
>```
##### * Factory
> ```javascript
> RegExp(pattern[, flags]);
>```

### 2. Pattern anatomy - Groups, Sets, Ranges _`/([...-...])/flags`_
![Image of pattern anatomy](https://github.com/ZornitsaAtanassova/JS-Fundamentals-may2019/blob/master/31.LAB_RegularExpression-17.07/pattern-anatomy.png)

### 3. Special characters:
Special characters | Meaning |
------------------------------- | ------- |
`[...]` | **Bracket - Set and Range.** Several characters, character classes or character ranges inside square brackets […] mean to “search for any character among given” |
`(...)` | **Bracket - Group.** Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference |
`\` | A **backslash** precedes a special character represent character class, like: w, W, d, D, s, S, b, B ... etc. Or represent the predefined characters like: \\, /, \| +, ?|
`^` | A **caret sign** is **Anchor - Begining of string** `/^.../`. Or **Negation** if it is included in set brackets `/[^...]/` |
`$` | **Anchor - End of string** |
`{1,3}` | **Quantifier** |
`*` | **Quantifier - star** |
`+` | **Quantifier - plus** |
`?` | **Quantifier - lazy or optional** |
`\|` | **Quantifier - alternation** |
`.` |  |
---


## :sparkles: Flags (Modifiers)
Regular expressions have 6 optional flags that affect the search.
To include flags with the regular expression, use these syntaxes:
> ```javascript
> let reg = /pattern/flags;
> let reg = new RegExp('pattern', 'flags');
>```

Flag (Modifier) | Description |
--------------- | ----------- |
[*g*](https://www.w3schools.com/jsref/jsref_regexp_g.asp) | Global search (match). Find all matches (without it – only the first one) |
[*i*](https://www.w3schools.com/jsref/jsref_regexp_i.asp) | Case-insensitive search. Ignore case, no difference between `A` and `a`|
[*m*](https://www.w3schools.com/jsref/jsref_regexp_m.asp) | Multiline search. In the multiline mode, they match not only at the beginning and end of the string but also at start/end of the line. It only affects the behavior of `^` and `$`.|
[*s*](https://javascript.info/regexp-character-classes) | "dotAll". Allows `.` to match newline characters. |
[*u*](https://javascript.info/regexp-unicode) | Unicode. Treat pattern as a sequence of Unicode code points |
[*y*](https://javascript.info/regexp-sticky) | Sticky. Matches only from the index indicated by the lastIndex property of this regular expression in the target string (and does not attempt to match from any later indexes). |

#### :owl: Examples:
```javascript
let str = 'Is this all there is?\nIs this begins?';

let patt0 = 'is'; // Търся само ПЪРВОТО срещнато!
let patt1 = /is/; // Търся само ПЪРВОТО срещнато!
let patt2 = /is/g; // Търся ВСИЧКИТЕ!
let patt3 = /is/gi; // Търся всичките, независимо от РЕГИСТЪРА!
let patt4 = /^is/mgi; // Търся само в началото (или края) на всеки РЕД, независимо от регистъра!
let patt5 = /\?$/mgi; // Търся само в (началото или) края на всеки РЕД, независимо от регистъра!

console.log(str + '\n');
console.log(str.match(patt0) + '\n' + 
            str.match(patt1) + '\n' + 
            str.match(patt2) + '\n' + 
            str.match(patt3) + '\n' +
            str.match(patt4) + '\n' +
            str.match(patt5)
);
```
###### Output:
```
Is this all there is?
Is this begins?

is
is
is,is,is
Is,is,is,Is,is
Is,Is
?,?
```
---

## :sparkles: Character Classes and Predefined Classes

**Character Classes** match a character from a specific **Sets** `/.../` `/[...]/` or **Ranges** `/[...-...]/`.

There are **Predefined Character Classes** and you can also define your own sets. Тhey represents the most common symbols in a string. Still called - **Metacharacter** `/\.../`.

Търсенето се прави по кодовете на символите от кодовите таблици, като ASCII:
![Image of pattern anatomy](https://github.com/ZornitsaAtanassova/JS-Fundamentals-may2019/blob/master/31.LAB_RegularExpression-17.07/ASCII.png)

Syntax |Set, Range or Metacharacter | Description |
------ | -------------------------- | ----------- |
------ | ------ | _Set - Последователност от символи:_ |
 `ABC` | expression(израз) | Match any expression **in the set.** _Търся точно този израз!_ |
`[ABC]` | character set | Match any character **in the set** . _Търся или `A` или `B` или `C`!_ |
`[^ABC]` | negated set | Match any character that is **not in the set**. _Търся всеки отделен символ с изключение на изброените!_ |
------ | ------ | _Range - Диапазон от символи:_ |
`[A-C]` | range | Matches a character having a character code **between** the two specified characters inclusive. _Търся или `A` или `B` или `C`!_ |
------ | ------ | _Range as Metacharacter - Шаблонен диапазон:_ |
`\w` | range of alpha-numerics | Matches any **word** character (**alphabetic, numeric & underscore**). Only matches **low-ASCII** characters. No accented, that means: non-roman, non-cyrillic or hieroglyphics characters. Equivalent to **[A-Za-z0-9_]**. _Търся от `A` до `B` и от `a` до `z` и от `0` до `9`, включително `_`!_ |
`\W` | range of not alpha-numeric | Matches any character that is **not a word** character (**whitespaces, non-roman, non-cyrillic, hieroglyphics, special symbols**, etc.). Equivalent to **[^A-Za-z0-9_]**. _Търся или ` ` или ` ____ ` или :arrow_heading_down: или `Ю`... или `â`... или `字`... или `@` `#` `&` `^` `+`...!_ |
`\d` | range of decimal digits | Matches any **digit** character (0-9). Equivalent to **[0-9]**. _Търся от `0` до `9`!_ |
`\D` | range of not digits | Matches any character that is **not a digit** character (0-9). Equivalent to **[^0-9]**. _Търся ВСИЧКО без от `0` до `9`!_ |
`\s` | range of whitespaces | Matches any **whitespace** character (**spaces, tabs, line breaks** :arrow_heading_down:). _Търся или ` ` или ` ____ ` или :arrow_heading_down:!_ |
`\S` | range of not whitespaces | Matches any character that is **not a whitespace** character (alphabetic, numeric, special symbols, non-roman, non-cyrillic, hieroglyphics, etc.). _Търся ВСИЧКО без ` `, ` ____ `, :arrow_heading_down:!_ |
`[.]` | expect :arrow_heading_down: | Matches any character **except linebreaks :arrow_heading_down:**. Equivalent to **[^\n\r]**. _Търся ВСИЧКО без :arrow_heading_down:!_ |
`[\w\W]` | any | _Търся абсолютно ВСИЧКО!_ |
`[\s\S]` | any | _Търся абсолютно ВСИЧКО!_ |

#### :owl: Examples:
Pattern | String | Output | Matches |
------- | ------ | ------ | ------- |
`/aeiou/g` | glib jocks vex dwarves `aeiou`! | `aeiou` | 1 |
------- | ------ | ------ | --- |
`/[aeiou]/g` | gl`i`b j`o`cks v`e`x dw`a`rv`e`s! | ioeae | 5 |
`/[^aeiou]/g` | `gl`i`b j`o`cks v`e`x dw`a`rv`e`s!` | glb jcks vx dwrvs! | 18 |
`/[g-sA-Z]/g` | ab`C`def`ghijklmnopqrs`tuvw`X`yz | CghijklmnopqrsX | 15 |
`/[\w]/g` | `mon`, `fr`è`re_`Учим`_`Î`nv`ăţă`m_`大字 | monfrre__nvm_ | 13 |
`/[\W]/g` | mon`, `fr`è`re_`Учим`_`Î`nv`ăţă`m_`大字` | , èУчимÎăţă大字 | 13 |
`/[\d]/g` | +`1`-(`444`)-`555`-`1234` | 14445551234 | 11 |
`/[\D]/g` | `+`1`-(`444`)-`555`-`1234 | +-()-- | 6 |
`/[\s]/g` | glib` `jocks:arrow_heading_down:vex` `dwarves! | ` `:arrow_heading_down:` ` | 3 |
`/[\S]/g` | `glib` `jocks`:arrow_heading_down:`vex` `dwarves!` | glibjocksvexdwarves! | 20 |
`/[.]/g` | `glib jocks`:arrow_heading_down:`vex dwarves!` | glib jocks vex dwarves! | 23 |
`/[\s\S]/g` | glib` j`ocks:arrow_heading_down:`v`ex` d`warves! | ` j`:arrow_heading_down:`v d` | 3 |

:bangbang: All solves, exclude the first, return multiple characters. The first returns words! To returns words and the other pattern, have to use :sparkles:**Quantifiers**!

---

## :sparkles: Quantifiers & Alternations
Syntax |Meaning | Description |
------ | ------ | ----------- |
`+` | One or more | Matches the previous element 1 or more times. _Търся 1 или последователност от много!_ |
`*` | Zero or more | Matches the previous element 0 or more times. _Търся 0 или последователност от много!_ |
`?` | Zero or one | Matches the previous element 0 or 1 time. _Търся 0 или точно 1!_ |
`{3}` | Exactly 3 | Matches the previous element exactly 3 times. _Търся всички последователности от 3 пъти от нещото: `ааа`!_ |
`{3,}` | 3 or more  | Matches the specified quantity of the previous token. Matches 3 or more. _Търся всички последователности от минимум 3 пъти от нещото: `ааа` или `aaaa` или `aaaaa` и т.н!_ |
`{1,3}` | Between 1 and 3 | Matches the specified quantity of the previous token. Matches 1 to 3. _Търся всички последователности между 1 и 3 пъти от нещото: `а` или `aa` или `aaa`!_ |
`*?` | Lazy | _Търся 0 или възможно най-малко!_ |
`*+` | Possessive |  |
`\|` | Alternation | Acts like a boolean **OR**. Matches the expression before or after the \|. It can operate within a group, or on a whole expression. The patterns will be tested in order |

#### :owl: Examples:
Pattern | String | Output | Matches |
------- | ------ | ------ | ------- |
`/a+/g` | `a` `aa` `aaa` b`a`b b`aa`b | `a` `aa` `aaa` `a` `aa` | 5 |
`/[\w]+/g` | `mon`, `fr`è`re_`Учим`_`Î`nv`ăţă`m_`大字 | `mon` `fr` `re_` `_` `nv` `m_` | 6 |
`/[\d]+/g` | +`359888880011`+abc+4 | `359888880011` | 1 |
`/\+[\d]+/g` | `+359888880011`+abc`+4` | `+359888880011` `+4` | 2 |
`/\w+@\w+.\w+/g` | invalid*`name@email.bg` | `name@email.bg` | 1 |
---- | -------- | ------- | --- |
`/ba*/g` | a `ba` `baa` aaa `ba` `b` | `ba` `baa` `ba` `b` | 4 |
`/\+[\d]*/g` | `+359888880011` `+`abc`+4` | `+359888880011` `+` `+4` | 3 |
---- | -------- | ------- | --- |
`/ba?/g` | `ba` `b` a | `ba` `b` | 2 |
---- | -------- | ------- | --- |
`/a{3}/g` | a aa `aaa` `aaa`a | `aaa` `aaa` | 2 |
`/\d{2}-\w{3}-\d{4}/g` | `30-Dec-1994` | `30-Dec-1994` | 1 |
---- | -------- | ------- | --- |
`/a{3,}/g` | a aa `aaa` `aaaa` | `aaa` `aaaa` | 2 |
`/a{1,3}/g` | a aa aaa aaaa | `a` `aa` `aaa` `aaa` `a` | 5 |
`/\d{1,2}-\w{3,4}-\d{4}/g` | `9-July-1994` | `9-July-1994` | 1 |
`/([^\#]*?)(\d+$)/g` | 9-July-1994 | `9-July-` `1994` | 2 |
`/b(a\|e\|i)d/g` | `bad` bud bod `bed` `bid` | `bad` `a` `bed` `e` `bid` `i` | 6 |
---

## :sparkles: Anchors
Anchors are unique in that they match a position within a string (same index), not a character

Syntax |Meaning | Description |
------ | ------ | ----------- |
`^` | beginning | Matches the **beginning** **of the string**, or the beginning **of a line** if the multiline flag (m) is enabled. This matches a position, not a character. _Низа и/или новия ред (ако е включен флага "m") трябва да започва само с указаното след човката_ |
`$` | end | Matches the **end** of the string, or the end of a line if the multiline flag (m) is enabled. This matches a position, not a character |
`\b` | word boundary | Matches a word **boundary** position between a word character and non-word character or position (start/end of the string). See the word character class (w) for more info |
`\B` | not word boundary | Matches **any** position that **is not a word boundary**. This matches a position, not a character |

#### :owl: Examples:
Pattern | String | Output | Matches |
------- | ------ | ------ | ------ |
`/^\w/` | `s`he sells sea shells | `s` | 1 |
`/^[a-z]+/` | `she` sells sea shells | `she` | 1 |
`/^\w+/` | `she` sells sea shells | `she` | 1 |
`/^\w+/gm` | `she` sells:arrow_heading_down:`sea` shells | `she` `see` | 2 |
`/^\w+@\w+.\w+/g` | invalid*name@email.bg |  | 0 |
| ----------------- | ----------------- |----------- | --- |
`/\w$/` | she sells sea shell`s` | `s` | 1 |
`/[a-z]+$/` | she sells sea `shells` | `shells` | 1 |
`/\w+$/` | she sells sea `shells` | `shells` | 1 |
`/\w+$/gm` | she `sells`:arrow_heading_down:sea `shells` | `sells` `shells` | 2 |
| ----------------- | ----------------- |----------- | --- |
`/ls\b/` | she sel`ls` sea shel`ls` | `ls` `ls` | 2 |
`/s\B/` | `sss`he `s`ells `s`ea `s`hells | `sss` `s` `s` `s` | 4 |
---

## :sparkles: Groups & References. Group constructs
Used groups to extract 

Syntax |Meaning | Description |
------ | ------ | ----------- |
`(subexpression)` | numbered capturing group | Backreferences. Captures the matched subexpression as numbered group |
`(?: subexpression)` | non-capturing group | Defines non-capturing group |
`(?<name> subexpression)` | named capturing | Defines a named capturing group |

#### :owl: Examples:
Pattern | String | Output | Matches |
------- | ------ | ------ | ------- |
`/(<(\w+).*>(.*)<\/\2>)/g` | `<a href="...">a@4 1&</a>` | `<a href="...">a@4 1&</a>` | 1 |
---

## :owl: Pattern tasks:
String and expected result | Pattern |
-------------------------- | ------- |
'`How to do...?`' | `/(^[WHIAC][\w]+)[\w\W]+([\?]$)/gm` |
'`How` to do...`?`' | `/(^[WHIAC][\w]+)\|([\?]$)/gm` |
... | ... |

***
## _<p align=center>:point_down: References:</p>_
###### _<p align=center>:point_right: [MDN Web Docs - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) :eyes:</p>_
###### _<p align=center>:point_right: [javascript.info - The Modern JavaScript Tutorial](https://javascript.info/regexp-introduction) :eyes:</p>_
###### _<p align=center>:point_right: [W3Schools.com - The World's Largest Web Developer Site](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) :eyes:</p>_
###### _<p align=center>:point_right: [W3Schools.bg - Web Design & Web Development](https://js.w3schools.bg/%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%B8-%D0%B8%D0%B7%D1%80%D0%B0%D0%B7%D0%B8/) :eyes:</p>_
###### _<p align=center>:point_right: [Tutorials Point - The Biggest Online Tutorials Library, It's all Free](https://www.tutorialspoint.com/javascript/javascript_regexp_object) :eyes:</p>_
###### _<p align=center>:point_right: [SoftUni, JS Fundamentals Module may 2019](https://softuni.bg) :eyes:</p>_
###### _<p align=center>:point_right: [RegExr.com - An online tool to learn, build, & test Regular Expressions](https://regexr.com/) :eyes:</p>_
###### _<p align=center>:point_right: [RegEx101.com - Online RegEx tester and debugger](https://regex101.com/) :eyes:</p>_
###### _<p align=center>:point_right: [Regex Cross­word.com - Crossword puzzle game of nerdy regex fun!](https://regexcrossword.com/) :eyes: :grin:</p>_
***