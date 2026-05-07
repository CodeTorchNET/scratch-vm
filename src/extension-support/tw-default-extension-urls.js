// If a project uses an extension but does not specify a URL, it will default to
// the URLs given here, if it exists. This is useful for compatibility with other mods.

const defaults = {
    // Box2D (`griffpatch`) is not listed here because our extension is not actually
    // compatible with the original version due to fields vs inputs.

    // Scratch Lab Animated Text - https://lab.scratch.mit.edu/text/
    'text': 'https://blockextensions.codetorch.net/extensions/lab/text.js',

    // Turboloader's AudioStream
    'audiostr': 'https://extensions.turbowarp.org/turboloader/audiostream.js',

    // https://scratch.mit.edu/discuss/topic/842592/
    'faceSensing':
        'https://blockextensions.codetorch.net/extensions/lab/face-sensing.js',

    // repair for the broken collaboration bug
    'stretch': 'https://blockextensions.codetorch.net/extensions/stretch.js',
    'Gamepad': 'https://blockextensions.codetorch.net/extensions/gamepad.js',
    'griffpatch': 'https://blockextensions.codetorch.net/extensions/box2d.js',
    'files': 'https://blockextensions.codetorch.net/extensions/files.js',
    'pointerlock':
        'https://blockextensions.codetorch.net/extensions/pointerlock.js',
    'MouseCursor': 'https://blockextensions.codetorch.net/extensions/cursor.js',
    'runtimeoptions':
        'https://blockextensions.codetorch.net/extensions/runtime-options.js',
    'fetch': 'https://blockextensions.codetorch.net/extensions/fetch.js',
    'strings': 'https://blockextensions.codetorch.net/extensions/text.js',
    'localstorage':
        'https://blockextensions.codetorch.net/extensions/local-storage.js',
    'truefantombase':
        'https://blockextensions.codetorch.net/extensions/true-fantom/base.js',
    'Bitwise': 'https://blockextensions.codetorch.net/extensions/bitwise.js',
    'skyhigh173BigInt':
        'https://blockextensions.codetorch.net/extensions/Skyhigh173/bigint.js',
    'utilities': 'https://blockextensions.codetorch.net/extensions/utilities.js',
    'notSound': 'https://blockextensions.codetorch.net/extensions/sound.js',
    'lmsVideo': 'https://blockextensions.codetorch.net/extensions/Lily/Video.js',
    'iframe': 'https://blockextensions.codetorch.net/extensions/iframe.js',
    'clayhtmlencode':
        'https://blockextensions.codetorch.net/extensions/Clay/htmlEncode.js',
    'xeltallivclipblend':
        'https://blockextensions.codetorch.net/extensions/Xeltalliv/clippingblending.js',
    'clipboard': 'https://blockextensions.codetorch.net/extensions/clipboard.js',
    'penP': 'https://blockextensions.codetorch.net/extensions/obviousAlexC/penPlus.js',
    'betterpen': 'https://blockextensions.codetorch.net/extensions/penplus.js',
    'xeltallivSimple3D':
        'https://blockextensions.codetorch.net/extensions/Xeltalliv/simple3D.js',
    'lmsSkins': 'https://blockextensions.codetorch.net/extensions/Lily/Skins.js',
    'obviousalexsensing':
        'https://blockextensions.codetorch.net/extensions/obviousAlexC/SensingPlus.js',
    'cubesterKeySimulation':
        'https://blockextensions.codetorch.net/extensions/CubesterYT/KeySimulation.js',
    'lmsclonesplus':
        'https://blockextensions.codetorch.net/extensions/Lily/ClonesPlus.js',
    'lmsLooksPlus':
        'https://blockextensions.codetorch.net/extensions/Lily/LooksPlus.js',
    'lmsMoreEvents':
        'https://blockextensions.codetorch.net/extensions/Lily/MoreEvents.js',
    'lmsListTools':
        'https://blockextensions.codetorch.net/extensions/Lily/ListTools.js',
    'mobilekeyboard0419':
        'https://blockextensions.codetorch.net/extensions/veggiecan/mobilekeyboard.js',
    'nkmoremotion':
        'https://blockextensions.codetorch.net/extensions/NexusKitten/moremotion.js',
    'cubesterWindowControls':
        'https://blockextensions.codetorch.net/extensions/CubesterYT/WindowControls.js',
    'fullscreen0419':
        'https://blockextensions.codetorch.net/extensions/veggiecan/browserfullscreen.js',
    'shreder95resolution':
        'https://blockextensions.codetorch.net/extensions/shreder95ua/resolution.js',
    'xmerclosecontrol':
        'https://blockextensions.codetorch.net/extensions/XmerOriginals/closecontrol.js',
    'navigatorinfo':
        'https://blockextensions.codetorch.net/extensions/navigator.js',
    'battery': 'https://blockextensions.codetorch.net/extensions/battery.js',
    'pwldevvibration':
        'https://blockextensions.codetorch.net/extensions/PwLDev/vibration.js',
    'shovelcss':
        'https://blockextensions.codetorch.net/extensions/TheShovel/CustomStyles.js',
    'shovelColorPicker':
        'https://blockextensions.codetorch.net/extensions/TheShovel/ColorPicker.js',
    'nkcontrols':
        'https://blockextensions.codetorch.net/extensions/NexusKitten/controlcontrols.js',
    'mdwaltersnotifications':
        'https://blockextensions.codetorch.net/extensions/mdwalters/notifications.js',
    'dtbyxeroname':
        'https://blockextensions.codetorch.net/extensions/XeroName/Deltatime.js',
    'AR': 'https://blockextensions.codetorch.net/extensions/ar.js',
    'Encoding': 'https://blockextensions.codetorch.net/extensions/encoding.js',
    'lmsSoundExpanded':
        'https://blockextensions.codetorch.net/extensions/Lily/SoundExpanded.js',
    'lmsTempVars2':
        'https://blockextensions.codetorch.net/extensions/Lily/TempVariables2.js',
    'lmsTimers':
        'https://blockextensions.codetorch.net/extensions/Lily/MoreTimers.js',
    'clouddataping':
        'https://blockextensions.codetorch.net/extensions/clouddata-ping.js',
    'cloudlink': 'https://blockextensions.codetorch.net/extensions/cloudlink.js',
    'truefantomnetwork':
        'https://blockextensions.codetorch.net/extensions/true-fantom/network.js',
    'truefantommath':
        'https://blockextensions.codetorch.net/extensions/true-fantom/math.js',
    'truefantomregexp':
        'https://blockextensions.codetorch.net/extensions/true-fantom/regexp.js',
    'truefantomcouplers':
        'https://blockextensions.codetorch.net/extensions/true-fantom/couplers.js',
    'dogeiscutformatnumbers':
        'https://blockextensions.codetorch.net/extensions/DogeisCut/FormatNumbers.js',
    'lmsAllMenus':
        'https://blockextensions.codetorch.net/extensions/Lily/AllMenus.js',
    'lmsHackedBlocks':
        'https://blockextensions.codetorch.net/extensions/Lily/HackedBlocks.js',
    'lmsCast': 'https://blockextensions.codetorch.net/extensions/Lily/Cast.js',
    'sipctime': 'https://blockextensions.codetorch.net/extensions/-SIPC-/time.js',
    'sipcconsole':
        'https://blockextensions.codetorch.net/extensions/-SIPC-/consoles.js',
    'zxmushroom63searchparams':
        'https://blockextensions.codetorch.net/extensions/ZXMushroom63/searchApi.js',
    'ShovelUtils':
        'https://blockextensions.codetorch.net/extensions/TheShovel/ShovelUtils.js',
    'lmsAssets':
        'https://blockextensions.codetorch.net/extensions/Lily/Assets.js',
    'SPASfontManager':
        'https://blockextensions.codetorch.net/extensions/SharkPool/Font-Manager.js',
    'dninwakelock':
        'https://blockextensions.codetorch.net/extensions/DNin/wake-lock.js',
    'skyhigh173JSON':
        'https://blockextensions.codetorch.net/extensions/Skyhigh173/json.js',
    'mbwxml': 'https://blockextensions.codetorch.net/extensions/mbw/xml.js',
    'numericalencoding2':
        'https://blockextensions.codetorch.net/extensions/numerical-encoding-2.js',
    'cs2627883NumericalEncoding':
        'https://blockextensions.codetorch.net/extensions/cs2627883/numericalencoding.js',
    'SPcamera':
        'https://blockextensions.codetorch.net/extensions/SharkPool/Camera.js',
    'DTcameracontrols':
        'https://blockextensions.codetorch.net/extensions/DT/cameracontrols.js',
    'theshovelcanvaseffects':
        'https://blockextensions.codetorch.net/extensions/TheShovel/CanvasEffects.js',
    'lbdrawtest':
        'https://blockextensions.codetorch.net/extensions/Longboost/color_channels.js',
    'cst1229zip':
        'https://blockextensions.codetorch.net/extensions/CST1229/zip.js',
    'images': 'https://blockextensions.codetorch.net/extensions/CST1229/images.js',
    'shovellzcompress':
        'https://blockextensions.codetorch.net/extensions/TheShovel/LZ-String.js',
    '0832rxfs2':
        'https://blockextensions.codetorch.net/extensions/0832/rxFS2.js',
    'nexuskittensgrab':
        'https://blockextensions.codetorch.net/extensions/NexusKitten/sgrab.js',
    'nonameawagraph':
        'https://blockextensions.codetorch.net/extensions/NOname-awa/graphics2d.js',
    'nonameawacomparisons':
        'https://blockextensions.codetorch.net/extensions/NOname-awa/more-comparisons.js',
    'jeremygamerTweening':
        'https://blockextensions.codetorch.net/extensions/JeremyGamer13/tween.js',
    'RixxyX': 'https://blockextensions.codetorch.net/extensions/rixxyx.js',
    'lmsutilsblocks':
        'https://blockextensions.codetorch.net/extensions/Lily/lmsutils.js',
    'qxsckdataanalysis':
        'https://blockextensions.codetorch.net/extensions/qxsck/data-analysis.js',
    'qxsckvarandlist':
        'https://blockextensions.codetorch.net/extensions/qxsck/var-and-list.js',
    'verctedictionaries':
        'https://blockextensions.codetorch.net/extensions/vercte/dictionaries.js',
    'gsaHTTPRequests':
        'https://blockextensions.codetorch.net/extensions/godslayerakp/http.js',
    'gsaWebsocket':
        'https://blockextensions.codetorch.net/extensions/godslayerakp/ws.js',
    'lmscomments':
        'https://blockextensions.codetorch.net/extensions/Lily/CommentBlocks.js',
    'longvegdictionary':
        'https://blockextensions.codetorch.net/extensions/veggiecan/LongmanDictionary.js',
    'cubesterTurboHook':
        'https://blockextensions.codetorch.net/extensions/CubesterYT/TurboHook.js',
    'alestorenfc':
        'https://blockextensions.codetorch.net/extensions/Alestore/nfcwarp.js',
    'steamworks':
        'https://blockextensions.codetorch.net/extensions/steamworks.js',
    'itch': 'https://blockextensions.codetorch.net/extensions/itchio.js',
    'GameJoltAPI': 'https://blockextensions.codetorch.net/extensions/gamejolt.js',
    'NGIO': 'https://blockextensions.codetorch.net/extensions/obviousAlexC/newgroundsIO.js',
    'lmsmcutils':
        'https://blockextensions.codetorch.net/extensions/Lily/McUtils.js',
    'lmsData':
        'https://blockextensions.codetorch.net/extensions/Lily/ListTools.js',
    'cst12293d': 'https://blockextensions.codetorch.net/extensions/CST1229/3d.js'
};

module.exports = defaults;
