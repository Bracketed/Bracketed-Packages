<div align="center" id="top">
    <img src="https://raw.githubusercontent.com/Bracketed/Bracketed-Packages/main/assets/LogoText.png" alt="Bracketed logo" width="800"/>
    Team Bracketed - <a href="https://bracketed.co.uk" >Website</a> | <a href="https://bracketed.co.uk/discord" >Discord</a> | <a href="https://github.com/Bracketed" >Github</a>
</div>

<br>

<h2 align="center" >@bracketed/typescript-config</h2>

A TypeScript configuration package that addresses common issues with the default TypeScript configuration. Our package is simple to use and is designed to enhance the functionality of your projects.

Additionally, we have implemented ongoing updates to ensure the package remains current and reliable for our own usage as well as yours.

( [@bracketed/typescript-config](https://yarnpkg.com/package/@bracketed/typescript-config) By ninjaninja140 )

<h2>What is this?</h2>
- A TypeScript configuration package that is built to recude the need of having to configure your own tsconfig.json file.
The tsconfig extension is short for "TypeScript configuration file." It's a file that developers create to tell the TypeScript compiler how to compile their code. Think of it like a set of instructions for the compiler to follow.

When you create a tsconfig file, you can specify things like which files to compile, where to put the compiled code, and which version of TypeScript to use. You can also configure advanced settings like how to handle certain types of errors or warnings.

Having a tsconfig file is important because it helps ensure consistency across a project. By having all developers use the same file, everyone will be compiling their code in the same way, which can reduce bugs and make it easier to maintain the code over time.

It's a very essential tool for any TypeScript developer's project.

<h2>Summary (Directory)</h2>

- [Installation](#Installation)
    <!--truncate-->
    - [Yarn](#YarnInstall)
    - [Npm](#NpmInstall)
- [Usage](#Usage)
- [Contribution](#Contribution)
- [ChangeLog](#versionlog)

<h2 id="Installation">Installation</h2>

Install via `yarn` or `npm`:

<p id="YarnInstall">Yarn:</p>

```sh
yarn add @bracketed/typescript-config --dev
```

<p id="NpmInstall">Npm:</p>

```sh
npm install --save-dev @bracketed/typescript-config
```

<h2 id="Usage">Usage</h2>

Add the following to your `tsconfig.json`:
Acceptable values:

- `base-config`
- `extra-strict`
- `extra-strict-without-decorators`
- `without-decorators`

```json
{
 "extends": "@bracketed/typescript-config/xxx-xxx"
}
```

<h1 id="Contribution">Contribution & Help</h1>

Feel free to contribute to this project, join our [discord](https://bracketed.co.uk/discord) and help us with future development of Project Bracketed.
Please also notify us of errors within our projects as we may not be aware of them at the time.

<h1 id="versionlog">ChangeLog & Versions</h1>

<details>
<summary style="font-weight: bold">Version 1</summary>
<li>Initial release</li>
<li>Package published to npm</li>
<li>Available by using npm install --save-dev @bracketed/typescript-config</li>
</details>

<details>
<summary style="font-weight: bold">Version 2</summary>
<li>Fixed Minor issues (x1)</li>
<li>Package now published to yarn</li>
<li>Available by using yarn add @bracketed/typescript-config --dev</li>
</details>

<details>
<summary style="font-weight: bold">Version 3</summary>
<li>Fixed Minor issues (x2)</li>
<li>package.json file updated with fixed details</li>
<li>Removed unnecessary dependencies</li>
<li>Added base config for beginners</li>
<li>Added without-decorators</li>
</details>

<br>
<br>
<br>
<br>

<div align="center" style="font-weight: bold">
    <h2>Thanks for downloading my package!</h2>
    <img src="https://raw.githubusercontent.com/Bracketed/Bracketed-Packages/main/assets/LogoBannerRounded.png" alt="Bracketed logo" width="900" style="border-radius: 25px" />
    Team Bracketed - <a href="https://bracketed.co.uk" >Website</a> | <a href="https://bracketed.co.uk/discord" >Discord</a> | <a href="https://github.com/Bracketed" >Github</a> | <a href="https://twitter.com/teambracketed" >Twitter</a> | <a href="#top" >Back To The Top</a>
    <br>
    <br>
    <img src="https://discordapp.com/api/guilds/1041758035355369542/widget.png?style=banner2" alt="Discord Banner" href="https://bracketed.co.uk/discord"/>
</div>
