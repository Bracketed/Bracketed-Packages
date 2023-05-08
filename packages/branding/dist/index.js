import axios from 'axios';
var Directories;
(function (Directories) {
    Directories["PlacardDirectory"] = "https://github.com/Bracketed/Branding/blob/main/Banners";
    Directories["PNGDirectory1"] = "https://github.com/Bracketed/Branding/blob/main/PNGs-TransparentBG";
    Directories["PNGDirectory2"] = "https://github.com/Bracketed/Branding/blob/main/PNGs";
    Directories["SVGDirectory"] = "https://github.com/Bracketed/Branding/blob/main/SVGs";
})(Directories || (Directories = {}));
/**
 * The Placards (Banners) section of `@bracketed/branding`, you will find all the banners for our stuff here.
 * If you cant find one just use `GetCustomFile()` to retrieve it, make sure to check [Our Github](https://github.com/Bracketed/Branding) for your files!
 *
 * @example
 * To get an image from the `Placards` Class.
 * ```
 * import { Placards } from '@bracketed/branding'
 *
 * Placards.TeamBracketedPlacardMinified // Gets our nice small [Bracketed] banner.
 * Placards.TeamBracketedPlacardExtended // Gets our extended [Bracketed] banner.
 * ```
 *
 * This class does **not** contain any asynchronous (async) functions or values.
 * **All** Values are **read-only**.
 * @type {string}
 */
var Placards;
(function (Placards) {
    Placards["TeamBracketedPlacardExtended"] = "https://github.com/Bracketed/Branding/blob/main/Banners/TeamBracketedBanner.png?raw=true";
    Placards["TeamBracketedPlacardMinified"] = "https://github.com/Bracketed/Branding/blob/main/Banners/LogoBannerTextMini.png?raw=true";
    Placards["SoundcloudPlacard"] = "https://github.com/Bracketed/Branding/blob/main/Banners/SoundCloudBanner.png?raw=true";
    Placards["BracketedBotPlacard"] = "https://github.com/Bracketed/Branding/blob/main/Banners/LogoBannerTextDefault.png?raw=true";
    Placards["BracketedBotPlacardAlt"] = "https://github.com/Bracketed/Branding/blob/main/Banners/LogoBannerTextBotUnderCenter.png?raw=true";
    Placards["BracketedBotMinifiedPlacard"] = "https://github.com/Bracketed/Branding/blob/main/Banners/LogoBanner.png?raw=true";
    Placards["BracketedBotTextPlacardPositionLeft"] = "https://github.com/Bracketed/Branding/blob/main/Banners/LogoBannerTextBotUnderLeft.png?raw=true";
    Placards["BracketedBotTextPlacardPositionRight"] = "https://github.com/Bracketed/Branding/blob/main/Banners/LogoBannerTextBotUnderRight.png?raw=true";
    Placards["BracketedBotTextPlacardPositionCenter"] = "https://github.com/Bracketed/Branding/blob/main/Banners/LogoBannerTextBotUnderCenter.png?raw=true";
    Placards["BracketedBotTextPlacardPositionDefault"] = "https://github.com/Bracketed/Branding/blob/main/Banners/LogoBannerTextDefault.png?raw=true";
    Placards["BracketedBotPlacardLogoOnly"] = "https://github.com/Bracketed/Branding/blob/main/Banners/LogoBanner.png?raw=true";
    Placards["MentionSymbolPlacard"] = "https://github.com/Bracketed/Branding/blob/main/Banners/AtBanner.png?raw=true";
    Placards["ModerationSymbolPlacard"] = "https://github.com/Bracketed/Branding/blob/main/Banners/BanBanner.png?raw=true";
})(Placards || (Placards = {}));
/**
 * The PNGs section of `@bracketed/branding`, you will find all the transparent png files for our icons here.
 * If you cant find one just use `GetCustomFile()` to retrieve it, make sure to check [Our Github](https://github.com/Bracketed/Branding) for your files!
 *
 * @example
 * To get an image from the `PortableNetworkGraphicLogos` Class.
 * ```
 * import { PortableNetworkGraphicLogos } from '@bracketed/branding'
 *
 * PortableNetworkGraphicLogos.TeamBracketedLogo // Gets our nice small [Bracketed] banner.
 * PortableNetworkGraphicLogos.TeamBracketedLogoLong // Gets our extended [Bracketed] banner.
 * ```
 *
 * This class does **not** contain any asynchronous (async) functions or values.
 * **All** Values are **read-only**.
 * @type {string}
 */
var PortableNetworkGraphicLogos;
(function (PortableNetworkGraphicLogos) {
    PortableNetworkGraphicLogos["TeamBracketedLogo"] = "https://github.com/Bracketed/Branding/blob/main/PNGs-TransparentBG/TeamBracketedLogoMini.png?raw=true";
    PortableNetworkGraphicLogos["TeamBracketedTextLogo"] = "https://github.com/Bracketed/Branding/blob/main/PNGs-TransparentBG/TeamBracketedLogoLong.png?raw=true";
    PortableNetworkGraphicLogos["BracketedBotTextLogo"] = "https://github.com/Bracketed/Branding/blob/main/PNGs-TransparentBG/BracketedTextLogoLong.png?raw=true";
    PortableNetworkGraphicLogos["BracketedTextLogo"] = "https://github.com/Bracketed/Branding/blob/main/PNGs-TransparentBG/BracketedTextLogoMini.png?raw=true";
    PortableNetworkGraphicLogos["BracketedBotLogo"] = "https://github.com/Bracketed/Branding/blob/main/PNGs-TransparentBG/BracketedLogo-MAIN.png?raw=true";
    PortableNetworkGraphicLogos["BracketedBotDevLogo"] = "https://github.com/Bracketed/Branding/blob/main/PNGs-TransparentBG/BracketedLogo-DEV.png?raw=true";
    PortableNetworkGraphicLogos["BracketedBotCustomLogo"] = "https://github.com/Bracketed/Branding/blob/main/PNGs-TransparentBG/BracketedLogo-CUSTOM.png?raw=true";
    PortableNetworkGraphicLogos["BracketedBotBetaLogo"] = "https://github.com/Bracketed/Branding/blob/main/PNGs-TransparentBG/BracketedLogo-BETA.png?raw=true";
})(PortableNetworkGraphicLogos || (PortableNetworkGraphicLogos = {}));
/**
 * The Emblems (Logos) section of `@bracketed/branding`, you will find all the transparent png files for our icons here.
 * If you cant find one just use `GetCustomFile()` to retrieve it, make sure to check [Our Github](https://github.com/Bracketed/Branding) for your files!
 *
 * @example
 * To get an image from the `Emblems` Class.
 * ```
 * import { Emblems } from '@bracketed/branding'
 *
 * Emblems.TeamBracketedEmblem.Small // Gets the smaller version of the Team Bracketed icon.
 * Emblems.TeamBracketedEmblem.Large // Gets the larger version of the Team Bracketed icon.
 * ```
 *
 * This class does **not** contain any asynchronous (async) functions or values.
 * **All** Values are **read-only**.
 * @type {string}
 */
var Emblems;
(function (Emblems) {
    Emblems["BracketedBetaEmblemSmall"] = "https://github.com/Bracketed/Branding/blob/main/PNGs/BracketedBotLogoBeta-Small.png?raw=true";
    Emblems["BracketedBetaEmblemLarge"] = "https://github.com/Bracketed/Branding/blob/main/PNGs/BracketedBotLogoBeta-Large.png?raw=true";
    Emblems["BracketedDevEmblemSmall"] = "https://github.com/Bracketed/Branding/blob/main/PNGs/BracketedBotLogoDev-Small.png?raw=true";
    Emblems["BracketedDevEmblemLarge"] = "https://github.com/Bracketed/Branding/blob/main/PNGs/BracketedBotLogoDev-Large.png?raw=true";
    Emblems["BracketedCustomEmblemSmall"] = "https://github.com/Bracketed/Branding/blob/main/PNGs/BracketedBotLogoCustom-Small.png?raw=true";
    Emblems["BracketedCustomEmblemLarge"] = "https://github.com/Bracketed/Branding/blob/main/PNGs/BracketedBotLogoCustom-Large.png?raw=true";
    Emblems["TeamBracketedEmblemSmall"] = "https://github.com/Bracketed/Branding/blob/main/PNGs/TeamBracketedLogoMini-Small.png?raw=true";
    Emblems["TeamBracketedEmblemLarge"] = "https://github.com/Bracketed/Branding/blob/main/PNGs/TeamBracketedLogoMini-Large.png?raw=true";
    Emblems["BracketedBotEmblemSmall"] = "https://github.com/Bracketed/Branding/blob/main/PNGs/BracketedBotLogo-Small.png?raw=true";
    Emblems["BracketedBotEmblemLarge"] = "https://github.com/Bracketed/Branding/blob/main/PNGs/BracketedBotLogo-Large.png?raw=true";
})(Emblems || (Emblems = {}));
/**
 * The ScalableVectorGraphicLogos (SVG Logos) section of `@bracketed/branding`, you will find all the transparent png files for our icons here.
 * If you cant find one just use `GetCustomFile()` to retrieve it, make sure to check [Our Github](https://github.com/Bracketed/Branding) for your files!
 *
 * @example
 * To get an image from the `ScalableVectorGraphicLogos` Class.
 * ```
 * import { ScalableVectorGraphicLogos } from '@bracketed/branding'
 *
 * ScalableVectorGraphicLogos.TeamBracketedVariants.Small // Gets the smaller version of the Team Bracketed icon.
 * ScalableVectorGraphicLogos.TeamBracketedVariants.Large // Gets the larger version of the Team Bracketed icon.
 * ScalableVectorGraphicLogos.TeamBracketedVariants.Logo // Gets the transparent logo version of the Team Bracketed icon.
 * ```
 *
 * Some of the Graphics in this section have slightly more graphics attached to them.
 * `TeamBracketedVariants` has an extra two, being `TextLogo` and `MiniTextLogo`
 * `BracketedBotVariants` has a single extra, being `TextLogo`
 * These can be both gotten from the same code above.
 *
 * This class does **not** contain any asynchronous (async) functions or values.
 * **All** Values are **read-only**.
 * @type {string}
 */
var ScalableVectorGraphicLogos;
(function (ScalableVectorGraphicLogos) {
    ScalableVectorGraphicLogos["BracketedBetaVariantSmall"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-BETA-BG-SMALL.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedBetaVariantLarge"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-BETA-BG-LARGE.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedBetaVariantLogo"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-BETA.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedDevVariantSmall"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-DEV-BG-SMALL.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedDevVariantLarge"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-DEV-BG-LARGE.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedDevVariantLogo"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-DEV.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedCustomVariantSmall"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-CUSTOM-BG-SMALL.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedCustomVariantLarge"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-CUSTOM-BG-LARGE.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedCustomVariantLogo"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-CUSTOM.svg?raw=true";
    ScalableVectorGraphicLogos["TeamBracketedVariantSmall"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/TeamBracketedLogoMini-BG-SMALL.svg?raw=true";
    ScalableVectorGraphicLogos["TeamBracketedVariantLarge"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/TeamBracketedLogoMini-BG-LARGE.svg?raw=true";
    ScalableVectorGraphicLogos["TeamBracketedVariantLogo"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/TeamBracketedLogoMini.svg?raw=true";
    ScalableVectorGraphicLogos["TeamBracketedVariantTextLogo"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/TeamBracketedLogoLong.svg?raw=true";
    ScalableVectorGraphicLogos["TeamBracketedVariantMiniTextLogo"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedTextLogoMini.svg";
    ScalableVectorGraphicLogos["BracketedBotVariantSmall"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-BETA-BG-SMALL.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedBotVariantLarge"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-BETA-BG-LARGE.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedBotVariantLogo"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedLogo-BETA.svg?raw=true";
    ScalableVectorGraphicLogos["BracketedBotVariantTextLogo"] = "https://github.com/Bracketed/Branding/blob/main/SVGs/BracketedTextLogoLong.svg?raw=true";
})(ScalableVectorGraphicLogos || (ScalableVectorGraphicLogos = {}));
/**
 * The `request` or `GetCustomFile` function.
 * This function retrieves graphics that may not already be set up in any class of this module.
 * For the index of images that you can use, well look for, please refer to the repository that holds them: https://github.com/Bracketed/Branding
 *
 * **Params:**
 * @param directory
 * @param fileName
 * @param extension
 *
 * `extension` can only be any of the following:
 * - png
 * - svg
 * - ai
 * - jpg
 *
 * To get images refer to the following example:
 * @example
 * To retrieve images using the GetCustomFile function.
 * ```
 * import { GetCustomFile } from '@bracketed/branding'
 *
 * await GetCustomFile('Banners', '3cxBG', 'png')
 * ```
 *
 * `GetCustomFile()` takes in 3 arguments being the params listed above at the params section.
 *
 * This function **is** an asynchronous function.
 * @type {string}
 */
async function request(directory, fileName, extension) {
    let Link = undefined;
    await axios({
        url: `https://github.com/Bracketed/Branding/blob/main/${directory}/${fileName}.${extension}`,
        method: 'get',
    })
        .then((response) => {
        if (response.status === 200) {
            Link = `https://github.com/Bracketed/Branding/blob/main/${directory}/${fileName}.${extension}`;
        }
    })
        .catch(() => {
        Link = undefined;
    });
    return Link;
}
export { Placards, PortableNetworkGraphicLogos, Emblems, ScalableVectorGraphicLogos, request as GetCustomFile, };
//# sourceMappingURL=index.js.map