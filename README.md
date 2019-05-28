# Amber
amber is a command line tool to create Sass components and thier responsive files.
it will create a new component and include it inside the _all.scc file also will create 4 Mixin and include them in thier files inside the ( Responsive ) folder.

---

## Requirments:
Node.js

Git

---

## Usage:
### 1- Clone The Project Files:
```git clone https://github.com/adel-bassiony/amber.git```

### 2- Create New Project ( new sass folder + structure ):

##### Using Node.js:
```node amber/commands/create_structure.js```

##### Using NPM (add this line inside your scripts):
```"cs": "node amber/commands/create_structure.js"```


### 3- Create New Component:

##### Using Node.js:
```node amber/commands/create_component.js```

##### Using NPM (add this line inside your scripts):

```"cc": "node amber/commands/create_component.js"```
