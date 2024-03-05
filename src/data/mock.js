export const mock = [
  {
    name: "Development Security",
    cards: [
      {
        imgField: [],
        question: "How to avoid SQL Injections?",
        answer:
          "1 - dont put response as 'this email alredy exists in users table' - nonblind sql atack, this leads to immediate feedback\n2 - pass generic feedback like: Invalid credentials",
      },
      {
        imgField: [],
        question: "How to avoid SQL Injections?",
        answer:
          "1 - dont put response as 'this email alredy exists in users table' - nonblind sql atack, this leads to immediate feedback\n2 - pass generic feedback like: Invalid credentials",
      },
      {
        imgField: [],
        question: "Command line injections lead to ...",
        answer:
          "attackers can make http request and get control of operating sys.",
      },
      {
        imgField: [],
        question: "What are the mitigations of CL injection?",
        answer:
          "  - scape sesive chars, as & before execution on OS (keep wich OS youre using as safe)\n- ruby uses system(bla) to exec system comands as nslookup\n- use the principle of least privilege allowing only esential permition to your programs\n- on linux you can use chroot command to prevent the process from exploring outside a designated root directory.\n- limit the network access on your webserver has with firewalls and access controls list on the network.\n- use logs files",
      },
      {
        imgField: [],
        question: "O que é Remote Code Exectution?",
        answer:
          "É uma tatica de ataque em que o invasor insere e exceuta codigo malicioso em um sistema remoto. Isso pode ser feito explorando vulnerabilidades em servidores, aplicações web ou outros sistemas que aceitam entrada de dados externa e nao tem proteção adequada contra.",
      },
      {
        imgField: [],
        question: "O Remote Code Exectution resulta em ... ?",
        answer:
          "Roubo de dados, controle remoto do sistema, interrupções de serviços.",
      },
      {
        imgField: [],
        question: "Como mitigar Remote Code Exectution",
        answer:
          "* mitigation: disable code exec durign deserialization\n- o que é serialização?\n- construção de dados in-memory que são trnaformados em partes menores de informação para serem estruturados posteriormente após a tranferencia pela rede\n- ex: object -> bytes -> file/db/memory -> bytes -> obj\n|__________SER._________||__________DES.________|\n- pesquise sobre bibliotecas de serialização. 😫 a serialização permite que attackers  injete cod\n- deactivate the recursos ativos de serialização de codigo em seu código",
      },
      {
        imgField: [],
        question: "File Upload Vulnerability mitigations?",
        answer:
          "* Mitigation #1: Host files on a Secure System\n- treat files as inert not executable files\n- you can do that by hosting your uploaded giles in a CDN (cloudFlare or akamai).\n- cdn has anothers benefits (if you dont remember, ask later to gpt)\n- cloud-based storage is a option (Amazon Simple Storage Service or S3)\n* Mitigation #2: Ensure Uploaded Files Cannot Be Executed:\n- rename files\n- uninstall php engine\n- dont do any project with user files \n- pg 62 - listing 6-16 shows how to use r and w permition but not excecute with python (vuln.)\n- remove unneeded software from y... use docker (still vulneravel, but more isolated)\n* Mitigation #3: Validade the content of uploaded files:\n- add file type checking to code \n- make sure contetn type header in the  http request of the upload matches the expected file type (vulnerabel ainda, a hacker cant spoof that)\n- listign 6-17 shows a way to validade a file by type \n- this doesnt excecute the file?\n- Answer: nops =)",
      },
      {
        imgField: [],
        question: "What is CROSS-SITE SCRIPTING ATTACKS?",
        answer:
          "* Definition: code injection into browser\n- atkrs can steal login credentials or other info\n- JS  can read HTTP sessin information and hijack usesr session entirely, pretending to be user remotely.\n",
      },
      {
        imgField: [],
        question: "o que é Stored Cross-Site Scripting Attacks?",
        answer:
          "- any page content from db is vulnerabel\n- Stored Cross-site scripting attack: the JS is written to the db, but excecuted in the browser when an unsuspecting victim view a particular page on the site.\n- JS code can be planted on DB with SQL injection\n- put <script> tags in sites inputs make excecutable to browsers (the comment example)\n    - sanitaze <script> tags before (store? request? recieve request?) happens.\n    - encoding the char for entity encoding makes it safe: \n        ''🙄   &quot \n        &   &amp\n        '   &apos\n        <   &lt\n        >   &gt\n        - this make on the mount page a safe construct to XSS attack\n        - list 7-2: that do this: ^ automaticly? \n            - yes when 'raw' int the middle \n    - read more about scape words",
      },
      {
        imgField: [],
        question: "Mitigações do Stored Cross-Site Scripting Attacks?",
        answer:
          "* Mitigation #2: Implement a content security policy:\n- content security policy: lock JS execution\n- inine Js: inject script tag ni victim website\n- setting content security policy makes a browser never exec inline script tags\n    - Content-Security-Policy: script-src 'self' https://apis.google.com\n- To make reports:\n    - Content-Security-Policy-Only? script-src 'self'; report-uri https://ex.com/csr-reports",
      },
      {
        imgField: [],
        question: "O que é Reflected Cross-site Scripting Attacks? ",
        answer:
          "- consist in pass script by URL and store it in server, then when other user request, it will be excecuted\n- easy to implement\n* Mitigation? Escape Dynamic content from HTTP request?\n    - encodig character like topic above\n- it persists",
      },
      {
        imgField: [],
        question: "O que é DOM-Based Cross-Site Scripting Attacks?",
        answer:
          "- consits in inject a content with id and sends it to the victim with maliciul script (inputs that sands it to attacker)\n- invisible to logs\n* Mitigation: Escaping Dynamic Content from URI Fragments:\n    - dont do:\n        funtion writeSomeHTML(){\n            return {__html: 'Fisrt &middot; Second'}\n        }\n        function  MyComponent (){\n            return <div dangerouslySetInnerHTML={writeSomeHTML()}/>\n        }",
      },
      {
        imgField: [],
        question: "O que torna um site vulneravel a dom-based XSS?",
        answer:
          "- entrada nao sanitizada\n- reflect dada not sanitized\n- missing scape text apropriated\n- missing browser event handler\n- 3rd party scripts not reliable\n- uso inadequado de apis js",
      },
      {
        imgField: [],
        question: "O que é Cross-Site Request Forgery Attacks?",
        answer:
          "Definition:\nAlso called sea-surf.\nAn attacker can trick user to click a malicious link that trigger undesireble or unexpected side effect.\nUses GET request that changes the state of a web server, but can be perfomed in other verbs.\nGETs are vulnerable 'cause they are public in the url\n- Example: \n    - Twitter post by GET meth. So a attacker can create a link then when clicked, it make post in users behalf.\n    - listing 8-1 shows how ^\n",
      },
      {
        imgField: [],
        question: "Qual o resultado do Cross-Site Request Forgery Attacks?",
        answer:
          "Steal gmail accounts, trigger one-click purchase on Amason, change router config.",
      },
      {
        imgField: [],
        question: "Como evitar Cross-Site Request Forgery Attacks?",
        answer:
          "\n- Follow REST Principles:\n    - GET must not change state serve, just return\n    - usar outros verbos alem de GET\n\n- Implement Anti-CSRF Cookies:\n    - pode ser feita uma solicitação post pel opc da vitima vindo de um site de terceitros  enviando o formulário com script malicioso\n    - se se tratar de informações sensíveis, deve-se usar cookies anti-CSRF (toke de string randomica que vai e volta entre client and server que é instalada no form - depois pesquise como implementar).\n\n- Use the SameSite Cookie Attribute\n    - specify a SemeSite attribute when you set cookies\n        -  Set-Cookie: _xsrf=546617348908139567; SameSite=Strict;\n        -  SameSite=Lax makes get requests can came from any source, otherwise it will request many times to login",
      },
      {
        imgField: [],
        question: "O que é Compromising Authentication?",
        answer:
          "\nDefenition:\n- Compromising users account on login and authentication. \n- Basic Authentication:\n    - Browser concatenates the username and pwd with a : between -> username:password\n    - Base64 algorithm encode that\n    - Sends to server in the Authorization header of HTTP request\n- Digest Authentication:\n    - browser generates a hash with username, password and URL \n        - Hash is the output of a one-way encritpion algorithm that makes it aeasy tho generate a unique 'figerprint' for a set of input data, but makes it difficult to guess the input values if you have only the algorithm's output\n- HTTP-Native Authentication:\n    - looks like js alert\n    - cant autocomplete\n    - cant reset a password\n    - implement reset separetly from the login (confusing the user)\n- Non-Native Authentication:\n    - common login with form and input fields",
      },
      {
        imgField: [],
        question: "Como evitar ataques de força bruta?",
        answer:
          "\nMitigation:\n- Use 3rd Party Authentication\n    - Microsoft/Google accounts button to login\n\n- Integrate to Single Sign-On\n    - OAuth or OpenId identity provider\n    - SSO: single-sign-on => centralizes authentication acros enterprise system so employees can log in seamlessly to 3rd party app\n        - Okta\n        - OneLogin\n        - Centrify\n\n- Secure Your Own Authentication System:",
      },
      {
        imgField: [],
        question: "Como promover a segurança do seu sistema web?",
        answer:
          "\n- Requiring Usernames, Email Addr or Both: nhõ nhõ nhõ? nhõ nhõ\n    \n    - Validating Email Addresses:\n        - send verification email to certify its an active account\n        - validate with regex - letters, numbers and specials\n            - must contain:\n                @\n                .XX\n                valid domain (search for DNS and MX - mail exchange)\n            - send a validation email containing a token\n            - create a blacklist email\n    \n    - Securing Password Resets:\n        - send a link to verified email, with a valid token for a period of time\n        - after that, token must be disabled\n    \n    - Requireing Complex Passwords:\n        - must have bla char length ... \n        - libs: password strength calculator\n    \n    - Securely Storing Passwords:\n        - store hashed passwords\n        - use bcrypt\n        - salting hashes: + secure, protect against rainbow tables\n            - rainbow tables: hackers use a list of words, see the result? calculate the output? what is that to do with salt? attacker has to regenerate the entire table for each salt... see later                            \n    \n    - Multifactor Authentication:\n        - Systems are allways vuln to brute force\n        - So we ask for something that you have: phone number, phisic card, thumb finguerprint, so on...\n    \n    - Secure Logout:\n        - should:\n            - clear the session cookie on browser\n                - send back a Set-Cookie with blank value\n            - invalidate the session identifier\n        - this protect by intercept session cookie and reestablish a session using solen cookie\n    \n    - Prevent User Enumeration:\n        - attacker can compromise tour auth system by enumerating users\n            - test each username form a list\n            - use a leaked credentials from prior hacks and attempt to verify if username exists on website\n        \n        - Mitigation:\n            - Dont differers password from username missmatch\n            - Actually: sand back the status_code its best\n            - Attackers use 'timming attacks': hash a pwd consume a time = X, if the response is < X, they can see how far the veriication goes\n                - Verify hashed password even if username dont exists\n            - Secure your reset password screen:\n                - Allways send 'Check your inbox'\n            - Implement CAPTCHA:\n                - CAPTCHA = Completely Automated Public Turing test to tell Computers and Humans Apart\n                - Machine Learning cant jump into, but prevents dumb/lazy hackers",
      },
      {
        imgField: [],
        question: "O que é Session Hijack?",
        answer:
          "\n1. Defenition:\n    - Even if there are no server vulnerability, a hacker steal a valid session when they are active\n2. Possible results:\n    - Hackers accessing users accounts.",
      },
    ],
  },
];
