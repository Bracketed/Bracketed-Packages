import axios from 'axios';

enum Directories {
	PlacardDirectory = 'https://github.com/Bracketed/Branding/blob/main/Banners',
	PNGDirectory1 = 'https://github.com/Bracketed/Branding/blob/main/PNGs-TransparentBG',
	PNGDirectory2 = 'https://github.com/Bracketed/Branding/blob/main/PNGs',
	SVGDirectory = 'https://github.com/Bracketed/Branding/blob/main/SVGs',
}

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
enum Placards {
	TeamBracketedPlacardExtended = `${Directories.PlacardDirectory}/TeamBracketedBanner.png?raw=true`,

	TeamBracketedPlacardMinified = `${Directories.PlacardDirectory}/LogoBannerTextMini.png?raw=true`,

	SoundcloudPlacard = `${Directories.PlacardDirectory}/SoundCloudBanner.png?raw=true`,

	BracketedBotPlacard = `${Directories.PlacardDirectory}/LogoBannerTextDefault.png?raw=true`,

	BracketedBotPlacardAlt = `${Directories.PlacardDirectory}/LogoBannerTextBotUnderCenter.png?raw=true`,

	BracketedBotMinifiedPlacard = `${Directories.PlacardDirectory}/LogoBanner.png?raw=true`,

	BracketedBotTextPlacardPositionLeft = `${Directories.PlacardDirectory}/LogoBannerTextBotUnderLeft.png?raw=true`,
	BracketedBotTextPlacardPositionRight = `${Directories.PlacardDirectory}/LogoBannerTextBotUnderRight.png?raw=true`,
	BracketedBotTextPlacardPositionCenter = `${Directories.PlacardDirectory}/LogoBannerTextBotUnderCenter.png?raw=true`,
	BracketedBotTextPlacardPositionDefault = `${Directories.PlacardDirectory}/LogoBannerTextDefault.png?raw=true`,
	BracketedBotPlacardLogoOnly = `${Directories.PlacardDirectory}/LogoBanner.png?raw=true`,

	MentionSymbolPlacard = `${Directories.PlacardDirectory}/AtBanner.png?raw=true`,
	ModerationSymbolPlacard = `${Directories.PlacardDirectory}/BanBanner.png?raw=true`,
}

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
enum PortableNetworkGraphicLogos {
	TeamBracketedLogo = `${Directories.PNGDirectory1}/TeamBracketedLogoMini.png?raw=true`,
	TeamBracketedTextLogo = `${Directories.PNGDirectory1}/TeamBracketedLogoLong.png?raw=true`,
	BracketedBotTextLogo = `${Directories.PNGDirectory1}/BracketedTextLogoLong.png?raw=true`, // ouch spelling mistake
	BracketedTextLogo = `${Directories.PNGDirectory1}/BracketedTextLogoMini.png?raw=true`,

	BracketedBotLogo = `${Directories.PNGDirectory1}/BracketedLogo-MAIN.png?raw=true`,
	BracketedBotDevLogo = `${Directories.PNGDirectory1}/BracketedLogo-DEV.png?raw=true`,
	BracketedBotCustomLogo = `${Directories.PNGDirectory1}/BracketedLogo-CUSTOM.png?raw=true`,
	BracketedBotBetaLogo = `${Directories.PNGDirectory1}/BracketedLogo-BETA.png?raw=true`,
}

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
enum Emblems {
	BracketedBetaEmblemSmall = `${Directories.PNGDirectory2}/BracketedBotLogoBeta-Small.png?raw=true`,
	BracketedBetaEmblemLarge = `${Directories.PNGDirectory2}/BracketedBotLogoBeta-Large.png?raw=true`,

	BracketedDevEmblemSmall = `${Directories.PNGDirectory2}/BracketedBotLogoDev-Small.png?raw=true`,
	BracketedDevEmblemLarge = `${Directories.PNGDirectory2}/BracketedBotLogoDev-Large.png?raw=true`,

	BracketedCustomEmblemSmall = `${Directories.PNGDirectory2}/BracketedBotLogoCustom-Small.png?raw=true`,
	BracketedCustomEmblemLarge = `${Directories.PNGDirectory2}/BracketedBotLogoCustom-Large.png?raw=true`,

	TeamBracketedEmblemSmall = `${Directories.PNGDirectory2}/TeamBracketedLogoMini-Small.png?raw=true`,
	TeamBracketedEmblemLarge = `${Directories.PNGDirectory2}/TeamBracketedLogoMini-Large.png?raw=true`,

	BracketedBotEmblemSmall = `${Directories.PNGDirectory2}/BracketedBotLogo-Small.png?raw=true`,
	BracketedBotEmblemLarge = `${Directories.PNGDirectory2}/BracketedBotLogo-Large.png?raw=true`,
}

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
enum ScalableVectorGraphicLogos {
	BracketedBetaVariantSmall = `${Directories.SVGDirectory}/BracketedLogo-BETA-BG-SMALL.svg?raw=true`,
	BracketedBetaVariantLarge = `${Directories.SVGDirectory}/BracketedLogo-BETA-BG-LARGE.svg?raw=true`,
	BracketedBetaVariantLogo = `${Directories.SVGDirectory}/BracketedLogo-BETA.svg?raw=true`,

	BracketedDevVariantSmall = `${Directories.SVGDirectory}/BracketedLogo-DEV-BG-SMALL.svg?raw=true`,
	BracketedDevVariantLarge = `${Directories.SVGDirectory}/BracketedLogo-DEV-BG-LARGE.svg?raw=true`,
	BracketedDevVariantLogo = `${Directories.SVGDirectory}/BracketedLogo-DEV.svg?raw=true`,

	BracketedCustomVariantSmall = `${Directories.SVGDirectory}/BracketedLogo-CUSTOM-BG-SMALL.svg?raw=true`,
	BracketedCustomVariantLarge = `${Directories.SVGDirectory}/BracketedLogo-CUSTOM-BG-LARGE.svg?raw=true`,
	BracketedCustomVariantLogo = `${Directories.SVGDirectory}/BracketedLogo-CUSTOM.svg?raw=true`,

	TeamBracketedVariantSmall = `${Directories.SVGDirectory}/TeamBracketedLogoMini-BG-SMALL.svg?raw=true`,
	TeamBracketedVariantLarge = `${Directories.SVGDirectory}/TeamBracketedLogoMini-BG-LARGE.svg?raw=true`,
	TeamBracketedVariantLogo = `${Directories.SVGDirectory}/TeamBracketedLogoMini.svg?raw=true`,
	TeamBracketedVariantTextLogo = `${Directories.SVGDirectory}/TeamBracketedLogoLong.svg?raw=true`,
	TeamBracketedVariantMiniTextLogo = `${Directories.SVGDirectory}/BracketedTextLogoMini.svg`,

	BracketedBotVariantSmall = `${Directories.SVGDirectory}/BracketedLogo-MAIN-BG-SMALL.svg?raw=true`,
	BracketedBotVariantLarge = `${Directories.SVGDirectory}/BracketedLogo-MAIN-BG-LARGE.svg?raw=true`,
	BracketedBotVariantLogo = `${Directories.SVGDirectory}/BracketedLogo-MAIN.svg?raw=true`,
	BracketedBotVariantTextLogo = `${Directories.SVGDirectory}/BracketedTextLogoLong.svg?raw=true`,
}

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
async function request(
	directory: string,
	fileName: string,
	extension: 'png' | 'svg' | 'ai' | 'jpg'
): Promise<string | undefined> {
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

export {
	Placards,
	PortableNetworkGraphicLogos,
	Emblems,
	ScalableVectorGraphicLogos,
	request as GetCustomFile,
};
