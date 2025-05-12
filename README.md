# GTA 5 Voice (GVMP) - Executor 
This repository demonstrates a Proof of Concept for exploiting the "Gta5Voice" plugin, allowing controlled execution of client-side code within GTA V.
## Installation

Clone the repository, then install the required packages by running the following command:

```bash
  npm install
```
    
## Configuration

To execute custom code, open `config.json` and set the `codeToExecute` parameter with your desired client code.

Example:
```json
"codeToExecute": "mp.trigger('setMoney', 1337);"
```
## Usage Example
This setup enables client-specific command execution, including custom commands like setting in-game resources or triggering specific client events. When u are using this Executor, you cannot interact with another people. That means you cant listen and speak with another player. Below is an in-game screenshot for reference:

![Ingame Screenshot](https://img001.prntscr.com/file/img001/XfKjLzLuS7eMxq-C3gWYCQ.png)

## Note
Eigentlich war es garnicht mein Ziel das ganze zu veröffentlichen, da aber nach mehrfachen Ignorieren das einfach "fallen" gelassen wurde, habe ich irgendwann die Source veröffentlicht für nicht gerade GVMP sondern andere Server Besitzer. 
Skeezy der 31er hat es gemeldet und hat daraufhin den positiven Akteneintrag bekommen, wobei ich garnichts bekommen habe in Bezug auf Akte.
Damit mir das geglaubt wird, ist hier der Akteneintrag aus dem ACP.

![ACP](https://i.ibb.co/TDCXmnGP/IMG-0153.jpg)
