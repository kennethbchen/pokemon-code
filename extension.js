// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');
var fs = require('fs');
var savefile = require('./data/savefile.json');
var extensionPath = vscode.extensions.getExtension('kennethbchen.pokemon-code-fork').extensionPath;
console.log(extensionPath);
var pokedex = {"1":{"name":"Bulbasaur","exp":64},"2":{"name":"Ivysaur","exp":142},"3":{"name":"Venusaur","exp":236},"4":{"name":"Charmander","exp":62},"5":{"name":"Charmeleon","exp":142},"6":{"name":"Charizard","exp":240},"7":{"name":"Squirtle","exp":63},"8":{"name":"Wartortle","exp":142},"9":{"name":"Blastoise","exp":239},"10":{"name":"Caterpie","exp":39},"11":{"name":"Metapod","exp":72},"12":{"name":"Butterfree","exp":178},"13":{"name":"Weedle","exp":39},"14":{"name":"Kakuna","exp":72},"15":{"name":"Beedrill","exp":178},"16":{"name":"Pidgey","exp":50},"17":{"name":"Pidgeotto","exp":122},"18":{"name":"Pidgeot","exp":216},"19":{"name":"Rattata","exp":51},"20":{"name":"Raticate","exp":145},"21":{"name":"Spearow","exp":52},"22":{"name":"Fearow","exp":155},"23":{"name":"Ekans","exp":58},"24":{"name":"Arbok","exp":157},"25":{"name":"Pikachu","exp":112},"26":{"name":"Raichu","exp":218},"27":{"name":"Sandshrew","exp":60},"28":{"name":"Sandslash","exp":158},"29":{"name":"Nidoran-f","exp":55},"30":{"name":"Nidorina","exp":128},"31":{"name":"Nidoqueen","exp":227},"32":{"name":"Nidoran-m","exp":55},"33":{"name":"Nidorino","exp":128},"34":{"name":"Nidoking","exp":227},"35":{"name":"Clefairy","exp":113},"36":{"name":"Clefable","exp":217},"37":{"name":"Vulpix","exp":60},"38":{"name":"Ninetales","exp":177},"39":{"name":"Jigglypuff","exp":95},"40":{"name":"Wigglytuff","exp":196},"41":{"name":"Zubat","exp":49},"42":{"name":"Golbat","exp":159},"43":{"name":"Oddish","exp":64},"44":{"name":"Gloom","exp":138},"45":{"name":"Vileplume","exp":221},"46":{"name":"Paras","exp":57},"47":{"name":"Parasect","exp":142},"48":{"name":"Venonat","exp":61},"49":{"name":"Venomoth","exp":158},"50":{"name":"Diglett","exp":53},"51":{"name":"Dugtrio","exp":149},"52":{"name":"Meowth","exp":58},"53":{"name":"Persian","exp":154},"54":{"name":"Psyduck","exp":64},"55":{"name":"Golduck","exp":175},"56":{"name":"Mankey","exp":61},"57":{"name":"Primeape","exp":159},"58":{"name":"Growlithe","exp":70},"59":{"name":"Arcanine","exp":194},"60":{"name":"Poliwag","exp":60},"61":{"name":"Poliwhirl","exp":135},"62":{"name":"Poliwrath","exp":230},"63":{"name":"Abra","exp":62},"64":{"name":"Kadabra","exp":140},"65":{"name":"Alakazam","exp":225},"66":{"name":"Machop","exp":61},"67":{"name":"Machoke","exp":142},"68":{"name":"Machamp","exp":227},"69":{"name":"Bellsprout","exp":60},"70":{"name":"Weepinbell","exp":137},"71":{"name":"Victreebel","exp":221},"72":{"name":"Tentacool","exp":67},"73":{"name":"Tentacruel","exp":180},"74":{"name":"Geodude","exp":60},"75":{"name":"Graveler","exp":137},"76":{"name":"Golem","exp":223},"77":{"name":"Ponyta","exp":82},"78":{"name":"Rapidash","exp":175},"79":{"name":"Slowpoke","exp":63},"80":{"name":"Slowbro","exp":172},"81":{"name":"Magnemite","exp":65},"82":{"name":"Magneton","exp":163},"83":{"name":"Farfetchd","exp":132},"84":{"name":"Doduo","exp":62},"85":{"name":"Dodrio","exp":165},"86":{"name":"Seel","exp":65},"87":{"name":"Dewgong","exp":166},"88":{"name":"Grimer","exp":65},"89":{"name":"Muk","exp":175},"90":{"name":"Shellder","exp":61},"91":{"name":"Cloyster","exp":184},"92":{"name":"Gastly","exp":62},"93":{"name":"Haunter","exp":142},"94":{"name":"Gengar","exp":225},"95":{"name":"Onix","exp":77},"96":{"name":"Drowzee","exp":66},"97":{"name":"Hypno","exp":169},"98":{"name":"Krabby","exp":65},"99":{"name":"Kingler","exp":166},"100":{"name":"Voltorb","exp":66},"101":{"name":"Electrode","exp":172},"102":{"name":"Exeggcute","exp":65},"103":{"name":"Exeggutor","exp":186},"104":{"name":"Cubone","exp":64},"105":{"name":"Marowak","exp":149},"106":{"name":"Hitmonlee","exp":159},"107":{"name":"Hitmonchan","exp":159},"108":{"name":"Lickitung","exp":77},"109":{"name":"Koffing","exp":68},"110":{"name":"Weezing","exp":172},"111":{"name":"Rhyhorn","exp":69},"112":{"name":"Rhydon","exp":170},"113":{"name":"Chansey","exp":395},"114":{"name":"Tangela","exp":87},"115":{"name":"Kangaskhan","exp":172},"116":{"name":"Horsea","exp":59},"117":{"name":"Seadra","exp":154},"118":{"name":"Goldeen","exp":64},"119":{"name":"Seaking","exp":158},"120":{"name":"Staryu","exp":68},"121":{"name":"Starmie","exp":182},"122":{"name":"Mr-mime","exp":161},"123":{"name":"Scyther","exp":100},"124":{"name":"Jynx","exp":159},"125":{"name":"Electabuzz","exp":172},"126":{"name":"Magmar","exp":173},"127":{"name":"Pinsir","exp":175},"128":{"name":"Tauros","exp":172},"129":{"name":"Magikarp","exp":40},"130":{"name":"Gyarados","exp":189},"131":{"name":"Lapras","exp":187},"132":{"name":"Ditto","exp":101},"133":{"name":"Eevee","exp":65},"134":{"name":"Vaporeon","exp":184},"135":{"name":"Jolteon","exp":184},"136":{"name":"Flareon","exp":184},"137":{"name":"Porygon","exp":79},"138":{"name":"Omanyte","exp":71},"139":{"name":"Omastar","exp":173},"140":{"name":"Kabuto","exp":71},"141":{"name":"Kabutops","exp":173},"142":{"name":"Aerodactyl","exp":180},"143":{"name":"Snorlax","exp":189},"144":{"name":"Articuno","exp":261},"145":{"name":"Zapdos","exp":261},"146":{"name":"Moltres","exp":261},"147":{"name":"Dratini","exp":60},"148":{"name":"Dragonair","exp":147},"149":{"name":"Dragonite","exp":270},"150":{"name":"Mewtwo","exp":306},"151":{"name":"Mew","exp":270},"152":{"name":"Chikorita","exp":64},"153":{"name":"Bayleef","exp":142},"154":{"name":"Meganium","exp":236},"155":{"name":"Cyndaquil","exp":62},"156":{"name":"Quilava","exp":142},"157":{"name":"Typhlosion","exp":240},"158":{"name":"Totodile","exp":63},"159":{"name":"Croconaw","exp":142},"160":{"name":"Feraligatr","exp":239},"161":{"name":"Sentret","exp":43},"162":{"name":"Furret","exp":145},"163":{"name":"Hoothoot","exp":52},"164":{"name":"Noctowl","exp":158},"165":{"name":"Ledyba","exp":53},"166":{"name":"Ledian","exp":137},"167":{"name":"Spinarak","exp":50},"168":{"name":"Ariados","exp":140},"169":{"name":"Crobat","exp":241},"170":{"name":"Chinchou","exp":66},"171":{"name":"Lanturn","exp":161},"172":{"name":"Pichu","exp":41},"173":{"name":"Cleffa","exp":44},"174":{"name":"Igglybuff","exp":42},"175":{"name":"Togepi","exp":49},"176":{"name":"Togetic","exp":142},"177":{"name":"Natu","exp":64},"178":{"name":"Xatu","exp":165},"179":{"name":"Mareep","exp":56},"180":{"name":"Flaaffy","exp":128},"181":{"name":"Ampharos","exp":230},"182":{"name":"Bellossom","exp":221},"183":{"name":"Marill","exp":88},"184":{"name":"Azumarill","exp":189},"185":{"name":"Sudowoodo","exp":144},"186":{"name":"Politoed","exp":225},"187":{"name":"Hoppip","exp":50},"188":{"name":"Skiploom","exp":119},"189":{"name":"Jumpluff","exp":207},"190":{"name":"Aipom","exp":72},"191":{"name":"Sunkern","exp":36},"192":{"name":"Sunflora","exp":149},"193":{"name":"Yanma","exp":78},"194":{"name":"Wooper","exp":42},"195":{"name":"Quagsire","exp":151},"196":{"name":"Espeon","exp":184},"197":{"name":"Umbreon","exp":184},"198":{"name":"Murkrow","exp":81},"199":{"name":"Slowking","exp":172},"200":{"name":"Misdreavus","exp":87},"201":{"name":"Unown","exp":118},"202":{"name":"Wobbuffet","exp":142},"203":{"name":"Girafarig","exp":159},"204":{"name":"Pineco","exp":58},"205":{"name":"Forretress","exp":163},"206":{"name":"Dunsparce","exp":145},"207":{"name":"Gligar","exp":86},"208":{"name":"Steelix","exp":179},"209":{"name":"Snubbull","exp":60},"210":{"name":"Granbull","exp":158},"211":{"name":"Qwilfish","exp":88},"212":{"name":"Scizor","exp":175},"213":{"name":"Shuckle","exp":177},"214":{"name":"Heracross","exp":175},"215":{"name":"Sneasel","exp":86},"216":{"name":"Teddiursa","exp":66},"217":{"name":"Ursaring","exp":175},"218":{"name":"Slugma","exp":50},"219":{"name":"Magcargo","exp":151},"220":{"name":"Swinub","exp":50},"221":{"name":"Piloswine","exp":158},"222":{"name":"Corsola","exp":144},"223":{"name":"Remoraid","exp":60},"224":{"name":"Octillery","exp":168},"225":{"name":"Delibird","exp":116},"226":{"name":"Mantine","exp":170},"227":{"name":"Skarmory","exp":163},"228":{"name":"Houndour","exp":66},"229":{"name":"Houndoom","exp":175},"230":{"name":"Kingdra","exp":243},"231":{"name":"Phanpy","exp":66},"232":{"name":"Donphan","exp":175},"233":{"name":"Porygon2","exp":180},"234":{"name":"Stantler","exp":163},"235":{"name":"Smeargle","exp":88},"236":{"name":"Tyrogue","exp":42},"237":{"name":"Hitmontop","exp":159},"238":{"name":"Smoochum","exp":61},"239":{"name":"Elekid","exp":72},"240":{"name":"Magby","exp":73},"241":{"name":"Miltank","exp":172},"242":{"name":"Blissey","exp":608},"243":{"name":"Raikou","exp":261},"244":{"name":"Entei","exp":261},"245":{"name":"Suicune","exp":261},"246":{"name":"Larvitar","exp":60},"247":{"name":"Pupitar","exp":144},"248":{"name":"Tyranitar","exp":270},"249":{"name":"Lugia","exp":306},"250":{"name":"Ho-oh","exp":306},"251":{"name":"Celebi","exp":270},"252":{"name":"Treecko","exp":62},"253":{"name":"Grovyle","exp":142},"254":{"name":"Sceptile","exp":239},"255":{"name":"Torchic","exp":62},"256":{"name":"Combusken","exp":142},"257":{"name":"Blaziken","exp":239},"258":{"name":"Mudkip","exp":62},"259":{"name":"Marshtomp","exp":142},"260":{"name":"Swampert","exp":241},"261":{"name":"Poochyena","exp":56},"262":{"name":"Mightyena","exp":147},"263":{"name":"Zigzagoon","exp":56},"264":{"name":"Linoone","exp":147},"265":{"name":"Wurmple","exp":56},"266":{"name":"Silcoon","exp":72},"267":{"name":"Beautifly","exp":178},"268":{"name":"Cascoon","exp":72},"269":{"name":"Dustox","exp":173},"270":{"name":"Lotad","exp":44},"271":{"name":"Lombre","exp":119},"272":{"name":"Ludicolo","exp":216},"273":{"name":"Seedot","exp":44},"274":{"name":"Nuzleaf","exp":119},"275":{"name":"Shiftry","exp":216},"276":{"name":"Taillow","exp":54},"277":{"name":"Swellow","exp":159},"278":{"name":"Wingull","exp":54},"279":{"name":"Pelipper","exp":154},"280":{"name":"Ralts","exp":40},"281":{"name":"Kirlia","exp":97},"282":{"name":"Gardevoir","exp":233},"283":{"name":"Surskit","exp":54},"284":{"name":"Masquerain","exp":159},"285":{"name":"Shroomish","exp":59},"286":{"name":"Breloom","exp":161},"287":{"name":"Slakoth","exp":56},"288":{"name":"Vigoroth","exp":154},
"289":{"name":"Slaking","exp":252},"290":{"name":"Nincada","exp":53},"291":{"name":"Ninjask","exp":160},"292":{"name":"Shedinja","exp":83},"293":{"name":"Whismur","exp":48},"294":{"name":"Loudred","exp":126},"295":{"name":"Exploud","exp":221},"296":{"name":"Makuhita","exp":47},"297":{"name":"Hariyama","exp":166},"298":{"name":"Azurill","exp":38},"299":{"name":"Nosepass","exp":75},"300":{"name":"Skitty","exp":52},"301":{"name":"Delcatty","exp":140},"302":{"name":"Sableye","exp":133},"303":{"name":"Mawile","exp":133},"304":{"name":"Aron","exp":66},"305":{"name":"Lairon","exp":151},"306":{"name":"Aggron","exp":239},"307":{"name":"Meditite","exp":56},"308":{"name":"Medicham","exp":144},"309":{"name":"Electrike","exp":59},"310":{"name":"Manectric","exp":166},"311":{"name":"Plusle","exp":142},"312":{"name":"Minun","exp":142},"313":{"name":"Volbeat","exp":151},"314":{"name":"Illumise","exp":151},"315":{"name":"Roselia","exp":140},"316":{"name":"Gulpin","exp":60},"317":{"name":"Swalot","exp":163},"318":{"name":"Carvanha","exp":61},"319":{"name":"Sharpedo","exp":161},"320":{"name":"Wailmer","exp":80},"321":{"name":"Wailord","exp":175},"322":{"name":"Numel","exp":61},"323":{"name":"Camerupt","exp":161},"324":{"name":"Torkoal","exp":165},"325":{"name":"Spoink","exp":66},"326":{"name":"Grumpig","exp":165},"327":{"name":"Spinda","exp":126},"328":{"name":"Trapinch","exp":58},"329":{"name":"Vibrava","exp":119},"330":{"name":"Flygon","exp":234},"331":{"name":"Cacnea","exp":67},"332":{"name":"Cacturne","exp":166},"333":{"name":"Swablu","exp":62},"334":{"name":"Altaria","exp":172},"335":{"name":"Zangoose","exp":160},"336":{"name":"Seviper","exp":160},"337":{"name":"Lunatone","exp":161},"338":{"name":"Solrock","exp":161},"339":{"name":"Barboach","exp":58},"340":{"name":"Whiscash","exp":164},"341":{"name":"Corphish","exp":62},"342":{"name":"Crawdaunt","exp":164},"343":{"name":"Baltoy","exp":60},"344":{"name":"Claydol","exp":175},"345":{"name":"Lileep","exp":71},"346":{"name":"Cradily","exp":173},"347":{"name":"Anorith","exp":71},"348":{"name":"Armaldo","exp":173},"349":{"name":"Feebas","exp":40},"350":{"name":"Milotic","exp":189},"351":{"name":"Castform","exp":147},"352":{"name":"Kecleon","exp":154},"353":{"name":"Shuppet","exp":59},"354":{"name":"Banette","exp":159},"355":{"name":"Duskull","exp":59},"356":{"name":"Dusclops","exp":159},"357":{"name":"Tropius","exp":161},"358":{"name":"Chimecho","exp":159},"359":{"name":"Absol","exp":163},"360":{"name":"Wynaut","exp":52},"361":{"name":"Snorunt","exp":60},"362":{"name":"Glalie","exp":168},"363":{"name":"Spheal","exp":58},"364":{"name":"Sealeo","exp":144},"365":{"name":"Walrein","exp":239},"366":{"name":"Clamperl","exp":69},"367":{"name":"Huntail","exp":170},"368":{"name":"Gorebyss","exp":170},"369":{"name":"Relicanth","exp":170},"370":{"name":"Luvdisc","exp":116},"371":{"name":"Bagon","exp":60},"372":{"name":"Shelgon","exp":147},"373":{"name":"Salamence","exp":270},"374":{"name":"Beldum","exp":60},"375":{"name":"Metang","exp":147},"376":{"name":"Metagross","exp":270},"377":{"name":"Regirock","exp":261},"378":{"name":"Regice","exp":261},"379":{"name":"Registeel","exp":261},"380":{"name":"Latias","exp":270},"381":{"name":"Latios","exp":270},"382":{"name":"Kyogre","exp":302},"383":{"name":"Groudon","exp":302},"384":{"name":"Rayquaza","exp":306},"385":{"name":"Jirachi","exp":270},"386":{"name":"Deoxys-normal","exp":270},"387":{"name":"Turtwig","exp":64},"388":{"name":"Grotle","exp":142},"389":{"name":"Torterra","exp":236},"390":{"name":"Chimchar","exp":62},"391":{"name":"Monferno","exp":142},"392":{"name":"Infernape","exp":240},"393":{"name":"Piplup","exp":63},"394":{"name":"Prinplup","exp":142},"395":{"name":"Empoleon","exp":239},"396":{"name":"Starly","exp":49},"397":{"name":"Staravia","exp":119},"398":{"name":"Staraptor","exp":218},"399":{"name":"Bidoof","exp":50},"400":{"name":"Bibarel","exp":144},"401":{"name":"Kricketot","exp":39},"402":{"name":"Kricketune","exp":134},"403":{"name":"Shinx","exp":53},"404":{"name":"Luxio","exp":127},"405":{"name":"Luxray","exp":235},"406":{"name":"Budew","exp":56},"407":{"name":"Roserade","exp":232},"408":{"name":"Cranidos","exp":70},"409":{"name":"Rampardos","exp":173},"410":{"name":"Shieldon","exp":70},"411":{"name":"Bastiodon","exp":173},"412":{"name":"Burmy","exp":45},"413":{"name":"Wormadam-plant","exp":148},"414":{"name":"Mothim","exp":148},"415":{"name":"Combee","exp":49},"416":{"name":"Vespiquen","exp":166},"417":{"name":"Pachirisu","exp":142},"418":{"name":"Buizel","exp":66},"419":{"name":"Floatzel","exp":173},"420":{"name":"Cherubi","exp":55},"421":{"name":"Cherrim","exp":158},"422":{"name":"Shellos","exp":65},"423":{"name":"Gastrodon","exp":166},"424":{"name":"Ambipom","exp":169},"425":{"name":"Drifloon","exp":70},"426":{"name":"Drifblim","exp":174},"427":{"name":"Buneary","exp":70},"428":{"name":"Lopunny","exp":168},"429":{"name":"Mismagius","exp":173},"430":{"name":"Honchkrow","exp":177},"431":{"name":"Glameow","exp":62},"432":{"name":"Purugly","exp":158},"433":{"name":"Chingling","exp":57},"434":{"name":"Stunky","exp":66},"435":{"name":"Skuntank","exp":168},"436":{"name":"Bronzor","exp":60},"437":{"name":"Bronzong","exp":175},"438":{"name":"Bonsly","exp":58},"439":{"name":"Mime-jr","exp":62},"440":{"name":"Happiny","exp":110},"441":{"name":"Chatot","exp":144},"442":{"name":"Spiritomb","exp":170},"443":{"name":"Gible","exp":60},"444":{"name":"Gabite","exp":144},"445":{"name":"Garchomp","exp":270},"446":{"name":"Munchlax","exp":78},"447":{"name":"Riolu","exp":57},"448":{"name":"Lucario","exp":184},"449":{"name":"Hippopotas","exp":66},"450":{"name":"Hippowdon","exp":184},"451":{"name":"Skorupi","exp":66},"452":{"name":"Drapion","exp":175},"453":{"name":"Croagunk","exp":60},"454":{"name":"Toxicroak","exp":172},"455":{"name":"Carnivine","exp":159},"456":{"name":"Finneon","exp":66},"457":{"name":"Lumineon","exp":161},"458":{"name":"Mantyke","exp":69},"459":{"name":"Snover","exp":67},"460":{"name":"Abomasnow","exp":173},"461":{"name":"Weavile","exp":179},"462":{"name":"Magnezone","exp":241},"463":{"name":"Lickilicky","exp":180},"464":{"name":"Rhyperior","exp":241},"465":{"name":"Tangrowth","exp":187},"466":{"name":"Electivire","exp":243},"467":{"name":"Magmortar","exp":243},"468":{"name":"Togekiss","exp":245},"469":{"name":"Yanmega","exp":180},"470":{"name":"Leafeon","exp":184},"471":{"name":"Glaceon","exp":184},"472":{"name":"Gliscor","exp":179},"473":{"name":"Mamoswine","exp":239},"474":{"name":"Porygon-z","exp":241},"475":{"name":"Gallade","exp":233},"476":{"name":"Probopass","exp":184},"477":{"name":"Dusknoir","exp":236},"478":{"name":"Froslass","exp":168},"479":{"name":"Rotom","exp":154},"480":{"name":"Uxie","exp":261},"481":{"name":"Mesprit","exp":261},"482":{"name":"Azelf","exp":261},"483":{"name":"Dialga","exp":306},"484":{"name":"Palkia","exp":306},"485":{"name":"Heatran","exp":270},"486":{"name":"Regigigas","exp":302},"487":{"name":"Giratina-altered","exp":306},"488":{"name":"Cresselia","exp":270},"489":{"name":"Phione","exp":216},"490":{"name":"Manaphy","exp":270},"491":{"name":"Darkrai","exp":270},"492":{"name":"Shaymin-land","exp":270},"493":{"name":"Arceus","exp":324},"494":{"name":"Victini","exp":270},"495":{"name":"Snivy","exp":62},"496":{"name":"Servine","exp":145},"497":{"name":"Serperior","exp":238},"498":{"name":"Tepig","exp":62},"499":{"name":"Pignite","exp":146},"500":{"name":"Emboar","exp":238},"501":{"name":"Oshawott","exp":62},"502":{"name":"Dewott","exp":145},"503":{"name":"Samurott","exp":238},"504":{"name":"Patrat","exp":51},"505":{"name":"Watchog","exp":147},"506":{"name":"Lillipup","exp":55},"507":{"name":"Herdier","exp":130},"508":{"name":"Stoutland","exp":225},"509":{"name":"Purrloin","exp":56},"510":{"name":"Liepard","exp":156},"511":{"name":"Pansage","exp":63},"512":{"name":"Simisage","exp":174},"513":{"name":"Pansear","exp":63},"514":{"name":"Simisear","exp":174},"515":{"name":"Panpour","exp":63},"516":{"name":"Simipour","exp":174},"517":{"name":"Munna","exp":58},"518":{"name":"Musharna","exp":170},"519":{"name":"Pidove","exp":53},"520":{"name":"Tranquill","exp":125},"521":{"name":"Unfezant","exp":220},"522":{"name":"Blitzle","exp":59},"523":{"name":"Zebstrika","exp":174},"524":{"name":"Roggenrola","exp":56},"525":{"name":"Boldore","exp":137},"526":{"name":"Gigalith","exp":232},"527":{"name":"Woobat","exp":65},"528":{"name":"Swoobat","exp":149},"529":{"name":"Drilbur","exp":66},"530":{"name":"Excadrill","exp":178},"531":{"name":"Audino","exp":390},"532":{"name":"Timburr","exp":61},"533":{"name":"Gurdurr","exp":142},"534":{"name":"Conkeldurr","exp":227},"535":{"name":"Tympole","exp":59},"536":{"name":"Palpitoad","exp":134},"537":{"name":"Seismitoad","exp":229},"538":{"name":"Throh","exp":163},"539":{"name":"Sawk","exp":163},"540":{"name":"Sewaddle","exp":62},"541":{"name":"Swadloon","exp":133},"542":{"name":"Leavanny","exp":225},"543":{"name":"Venipede","exp":52},"544":{"name":"Whirlipede","exp":126},"545":{"name":"Scolipede","exp":218},"546":{"name":"Cottonee","exp":56},"547":{"name":"Whimsicott","exp":168},"548":{"name":"Petilil","exp":56},"549":{"name":"Lilligant","exp":168},"550":{"name":"Basculin-red-striped","exp":161},"551":{"name":"Sandile","exp":58},"552":{"name":"Krokorok","exp":123},"553":{"name":"Krookodile","exp":234},"554":{"name":"Darumaka","exp":63},"555":{"name":"Darmanitan-standard","exp":168},"556":{"name":"Maractus","exp":161},"557":{"name":"Dwebble","exp":65},"558":{"name":"Crustle","exp":170},"559":{"name":"Scraggy","exp":70},"560":{"name":"Scrafty","exp":171},"561":{"name":"Sigilyph","exp":172},"562":{"name":"Yamask","exp":61},"563":{"name":"Cofagrigus","exp":169},"564":{"name":"Tirtouga","exp":71},"565":{"name":"Carracosta","exp":173},"566":{"name":"Archen","exp":71},"567":{"name":"Archeops","exp":177},"568":{"name":"Trubbish","exp":66},"569":{"name":"Garbodor","exp":166},"570":{"name":"Zorua","exp":66},"571":{"name":"Zoroark","exp":179},
"572":{"name":"Minccino","exp":60},"573":{"name":"Cinccino","exp":165},"574":{"name":"Gothita","exp":58},"575":{"name":"Gothorita","exp":137},"576":{"name":"Gothitelle","exp":221},"577":{"name":"Solosis","exp":58},"578":{"name":"Duosion","exp":130},"579":{"name":"Reuniclus","exp":221},"580":{"name":"Ducklett","exp":61},"581":{"name":"Swanna","exp":166},"582":{"name":"Vanillite","exp":61},"583":{"name":"Vanillish","exp":138},"584":{"name":"Vanilluxe","exp":241},"585":{"name":"Deerling","exp":67},"586":{"name":"Sawsbuck","exp":166},"587":{"name":"Emolga","exp":150},"588":{"name":"Karrablast","exp":63},"589":{"name":"Escavalier","exp":173},"590":{"name":"Foongus","exp":59},"591":{"name":"Amoonguss","exp":162},"592":{"name":"Frillish","exp":67},"593":{"name":"Jellicent","exp":168},"594":{"name":"Alomomola","exp":165},"595":{"name":"Joltik","exp":64},"596":{"name":"Galvantula","exp":165},"597":{"name":"Ferroseed","exp":61},"598":{"name":"Ferrothorn","exp":171},"599":{"name":"Klink","exp":60},"600":{"name":"Klang","exp":154},"601":{"name":"Klinklang","exp":234},"602":{"name":"Tynamo","exp":55},"603":{"name":"Eelektrik","exp":142},"604":{"name":"Eelektross","exp":232},"605":{"name":"Elgyem","exp":67},"606":{"name":"Beheeyem","exp":170},"607":{"name":"Litwick","exp":55},"608":{"name":"Lampent","exp":130},"609":{"name":"Chandelure","exp":234},"610":{"name":"Axew","exp":64},"611":{"name":"Fraxure","exp":144},"612":{"name":"Haxorus","exp":243},"613":{"name":"Cubchoo","exp":61},"614":{"name":"Beartic","exp":177},"615":{"name":"Cryogonal","exp":180},"616":{"name":"Shelmet","exp":61},"617":{"name":"Accelgor","exp":173},"618":{"name":"Stunfisk","exp":165},"619":{"name":"Mienfoo","exp":70},"620":{"name":"Mienshao","exp":179},"621":{"name":"Druddigon","exp":170},"622":{"name":"Golett","exp":61},"623":{"name":"Golurk","exp":169},"624":{"name":"Pawniard","exp":68},"625":{"name":"Bisharp","exp":172},"626":{"name":"Bouffalant","exp":172},"627":{"name":"Rufflet","exp":70},"628":{"name":"Braviary","exp":179},"629":{"name":"Vullaby","exp":74},"630":{"name":"Mandibuzz","exp":179},"631":{"name":"Heatmor","exp":169},"632":{"name":"Durant","exp":169},"633":{"name":"Deino","exp":60},"634":{"name":"Zweilous","exp":147},"635":{"name":"Hydreigon","exp":270},"636":{"name":"Larvesta","exp":72},"637":{"name":"Volcarona","exp":248},"638":{"name":"Cobalion","exp":261},"639":{"name":"Terrakion","exp":261},"640":{"name":"Virizion","exp":261},"641":{"name":"Tornadus-incarnate","exp":261},"642":{"name":"Thundurus-incarnate","exp":261},"643":{"name":"Reshiram","exp":306},"644":{"name":"Zekrom","exp":306},"645":{"name":"Landorus-incarnate","exp":270},"646":{"name":"Kyurem","exp":297},"647":{"name":"Keldeo-ordinary","exp":261},"648":{"name":"Meloetta-aria","exp":270},"649":{"name":"Genesect","exp":270},"650":{"name":"Chespin","exp":63},"651":{"name":"Quilladin","exp":142},"652":{"name":"Chesnaught","exp":239},"653":{"name":"Fennekin","exp":61},"654":{"name":"Braixen","exp":143},"655":{"name":"Delphox","exp":240},"656":{"name":"Froakie","exp":63},"657":{"name":"Frogadier","exp":142},"658":{"name":"Greninja","exp":239},"659":{"name":"Bunnelby","exp":47},"660":{"name":"Diggersby","exp":148},"661":{"name":"Fletchling","exp":56},"662":{"name":"Fletchinder","exp":134},"663":{"name":"Talonflame","exp":175},"664":{"name":"Scatterbug","exp":40},"665":{"name":"Spewpa","exp":75},"666":{"name":"Vivillon","exp":185},"667":{"name":"Litleo","exp":74},"668":{"name":"Pyroar","exp":177},"669":{"name":"Flabebe","exp":61},"670":{"name":"Floette","exp":130},"671":{"name":"Florges","exp":248},"672":{"name":"Skiddo","exp":70},"673":{"name":"Gogoat","exp":186},"674":{"name":"Pancham","exp":70},"675":{"name":"Pangoro","exp":173},"676":{"name":"Furfrou","exp":165},"677":{"name":"Espurr","exp":71},"678":{"name":"Meowstic-male","exp":163},"679":{"name":"Honedge","exp":65},"680":{"name":"Doublade","exp":157},"681":{"name":"Aegislash-shield","exp":234},"682":{"name":"Spritzee","exp":68},"683":{"name":"Aromatisse","exp":162},"684":{"name":"Swirlix","exp":68},"685":{"name":"Slurpuff","exp":168},"686":{"name":"Inkay","exp":58},"687":{"name":"Malamar","exp":169},"688":{"name":"Binacle","exp":61},"689":{"name":"Barbaracle","exp":175},"690":{"name":"Skrelp","exp":64},"691":{"name":"Dragalge","exp":173},"692":{"name":"Clauncher","exp":66},"693":{"name":"Clawitzer","exp":100},"694":{"name":"Helioptile","exp":58},"695":{"name":"Heliolisk","exp":168},"696":{"name":"Tyrunt","exp":72},"697":{"name":"Tyrantrum","exp":182},"698":{"name":"Amaura","exp":72},"699":{"name":"Aurorus","exp":104},"700":{"name":"Sylveon","exp":184},"701":{"name":"Hawlucha","exp":175},"702":{"name":"Dedenne","exp":151},"703":{"name":"Carbink","exp":100},"704":{"name":"Goomy","exp":60},"705":{"name":"Sliggoo","exp":158},"706":{"name":"Goodra","exp":270},"707":{"name":"Klefki","exp":165},"708":{"name":"Phantump","exp":62},"709":{"name":"Trevenant","exp":166},"710":{"name":"Pumpkaboo-average","exp":67},"711":{"name":"Gourgeist-average","exp":173},"712":{"name":"Bergmite","exp":61},"713":{"name":"Avalugg","exp":180},"714":{"name":"Noibat","exp":49},"715":{"name":"Noivern","exp":187},"716":{"name":"Xerneas","exp":306},"717":{"name":"Yveltal","exp":306},"718":{"name":"Zygarde","exp":270},"719":{"name":"Diancie","exp":270},"720":{"name":"Hoopa","exp":270},"721":{"name":"Volcanion","exp":270},"722":{"name":"Rowlet","exp":64},"723":{"name":"Dartrix","exp":147},"724":{"name":"Decidueye","exp":239},"725":{"name":"Litten","exp":64},"726":{"name":"Torracat","exp":147},"727":{"name":"Incineroar","exp":239},"728":{"name":"Popplio","exp":64},"729":{"name":"Brionne","exp":147},"730":{"name":"Primarina","exp":239},"731":{"name":"Pikipek","exp":53},"732":{"name":"Trumbeak","exp":124},"733":{"name":"Toucannon","exp":218},"734":{"name":"Yungoos","exp":51},"735":{"name":"Gumshoos","exp":146},"736":{"name":"Grubbin","exp":60},"737":{"name":"Charjabug","exp":140},"738":{"name":"Vikavolt","exp":225},"739":{"name":"Crabrawler","exp":68},"740":{"name":"Crabominable","exp":167},"741":{"name":"Oricorio-baile","exp":167},"742":{"name":"Cutiefly","exp":61},"743":{"name":"Ribombee","exp":162},"744":{"name":"Rockruff","exp":56},"745":{"name":"Lycanroc-midday","exp":170},"746":{"name":"Wishiwashi-solo","exp":61},"747":{"name":"Mareanie","exp":61},"748":{"name":"Toxapex","exp":173},"749":{"name":"Mudbray","exp":77},"750":{"name":"Mudsdale","exp":175},"751":{"name":"Dewpider","exp":54},"752":{"name":"Araquanid","exp":159},"753":{"name":"Fomantis","exp":50},"754":{"name":"Lurantis","exp":168},"755":{"name":"Morelull","exp":57},"756":{"name":"Shiinotic","exp":142},"757":{"name":"Salandit","exp":64},"758":{"name":"Salazzle","exp":168},"759":{"name":"Stufful","exp":68},"760":{"name":"Bewear","exp":175},"761":{"name":"Bounsweet","exp":42},"762":{"name":"Steenee","exp":102},"763":{"name":"Tsareena","exp":230},"764":{"name":"Comfey","exp":170},"765":{"name":"Oranguru","exp":172},"766":{"name":"Passimian","exp":172},"767":{"name":"Wimpod","exp":46},"768":{"name":"Golisopod","exp":186},"769":{"name":"Sandygast","exp":64},"770":{"name":"Palossand","exp":168},"771":{"name":"Pyukumuku","exp":144},"772":{"name":"Type-null","exp":107},"773":{"name":"Silvally","exp":257},"774":{"name":"Minior-red-meteor","exp":154},"775":{"name":"Komala","exp":168},"776":{"name":"Turtonator","exp":170},"777":{"name":"Togedemaru","exp":152},"778":{"name":"Mimikyu-disguised","exp":167},"779":{"name":"Bruxish","exp":166},"780":{"name":"Drampa","exp":170},"781":{"name":"Dhelmise","exp":181},"782":{"name":"Jangmo-o","exp":60},"783":{"name":"Hakamo-o","exp":147},"784":{"name":"Kommo-o","exp":270},"785":{"name":"Tapu-koko","exp":257},"786":{"name":"Tapu-lele","exp":257},"787":{"name":"Tapu-bulu","exp":257},"788":{"name":"Tapu-fini","exp":257},"789":{"name":"Cosmog","exp":40},"790":{"name":"Cosmoem","exp":140},"791":{"name":"Solgaleo","exp":306},"792":{"name":"Lunala","exp":306},"793":{"name":"Nihilego","exp":257},"794":{"name":"Buzzwole","exp":257},"795":{"name":"Pheromosa","exp":257},"796":{"name":"Xurkitree","exp":257},"797":{"name":"Celesteela","exp":257},"798":{"name":"Kartana","exp":257},"799":{"name":"Guzzlord","exp":257},"800":{"name":"Necrozma","exp":270},"801":{"name":"Magearna","exp":270},"802":{"name":"Marshadow","exp":270},"803":{"name":"Poipole","exp":189},"804":{"name":"Naganadel","exp":243},"805":{"name":"Stakataka","exp":257},"806":{"name":"Blacephalon","exp":257},"807":{"name":"Zeraora","exp":270}}
var items = savefile.items;
var pokemon_boxes = savefile.pokemon_boxes;
var shown_pokemon = null;
var current_razzberry = false;
var spawn_rarity = 500 // 1 chance out of spawn_rarity to spawn a Pokemon, 2 chances to spawn items. Each 1/spawn_rarity is a change in text-selection position.

function save(){
    fs.writeFile(extensionPath+'/data/savefile.json', JSON.stringify({'items': items, 'pokemon_boxes': pokemon_boxes}));
}

function show_pokemon(){
    var pokemon_list = [];
    for (var key in pokemon_boxes){
        pokemon_list.push(pokedex[key].name + ' (x'+pokemon_boxes[key]+')');
    }
    vscode.window.showQuickPick(pokemon_list).then(function(){
    });
}

function show_inventory(){
    var catch_options = [];
    var catch_options_reverse = {};
    function addItemOption(item){
        if (items[item] > 0){
            catch_options.push(item+' (x'+items[item]+')');
            catch_options_reverse[item+' (x'+items[item]+')'] = item;
        }
    }
    addItemOption('Pokeball');
    addItemOption('Greatball');
    addItemOption('Ultraball');
    addItemOption('Razzberry');
    vscode.window.showQuickPick(catch_options).then(function(choice){

    });
}

// Let's set everything up to start hunting for Pokemon!
function init_tallgrass(){

    var newDecoration = null;

    function _catchAttempt(pokeball){
        var rates = {
            'Pokeball': 255,
            'Greatball': 200,
            'Ultraball': 150
        };
        var rate = rates[pokeball];
        if (current_razzberry){
            rate = rate * .8;
            current_razzberry = false;
        }
        var catch_num = Math.floor(Math.random()*rate);
        var pokemon_num = 255 - pokedex[shown_pokemon].exp;
        if (pokemon_num < 1){
            pokemon_num = 1;
        }
        if (catch_num <= pokemon_num){
            vscode.window.showInformationMessage('You caught the '+pokedex[''+shown_pokemon].name+'! Mom would be proud.');
            if (typeof pokemon_boxes[shown_pokemon] === "undefined"){
                pokemon_boxes[shown_pokemon] = 0;
            }
            pokemon_boxes[shown_pokemon]++;
            save();
            vscode.window.activeTextEditor.setDecorations(newDecoration, []);
            shown_pokemon = null;
        }else{
            var fleeCheck = Math.floor(Math.random()*1000);
            if (fleeCheck < pokedex[shown_pokemon].exp){
                vscode.window.showErrorMessage('Sad day, '+pokedex[shown_pokemon].name+' ran away...');
                vscode.window.activeTextEditor.setDecorations(newDecoration, []);
                shown_pokemon = null;
            }else{
                vscode.window.showWarningMessage('Oh no, the '+pokedex[''+shown_pokemon].name+' broke free!', {}, ...['Try Again']).then(function(chosen){
                    if (chosen == 'Try Again'){
                        _catch();
                    }else{
                        vscode.window.activeTextEditor.setDecorations(newDecoration, []);
                        shown_pokemon = null;
                    }
                });
            }
        }
    }

    function _catch(){
        var catch_options = [];
        var catch_options_reverse = {};
        function addItemOption(item){
            if (items[item] > 0){
                catch_options.push(item+' (x'+items[item]+')');
                catch_options_reverse[item+' (x'+items[item]+')'] = item;
            }
        }
        addItemOption('Pokeball');
        addItemOption('Greatball');
        addItemOption('Ultraball');
        if (!current_razzberry){
            addItemOption('Razzberry');
        }
        vscode.window.showQuickPick(catch_options).then(function(choice){
            if (choice){
                choice = catch_options_reverse[choice];
                items[choice]--;
                save();
                switch(choice){
                    case 'Pokeball':
                    case 'Greatball':
                    case 'Ultraball':
                        _catchAttempt(choice)
                        break;
                    case 'Razzberry':
                        current_razzberry = true;
                        vscode.window.showInformationMessage('You fed the Razzberry to '+pokedex[''+shown_pokemon].name+'!', {}, ...['Next']).then(function(chosen){
                            _catch();
                        });
                        break;
                }
            }else{
                vscode.window.activeTextEditor.setDecorations(newDecoration, []);
                shown_pokemon = null;
            }
        });
    }

    function _walk(){

        if (shown_pokemon !== null){
            return;
        }
        
        var n = Math.floor(Math.random()*spawn_rarity);
        if (n==1 || n==2){
            shown_pokemon = Math.floor(Math.random()*721);
            vscode.window.showInformationMessage('A wild '+pokedex[''+shown_pokemon].name+' appeared!', {},...['Catch']).then(function(chosen){
                if (chosen=="Catch"){
                    _catch();
                }else{
                    vscode.window.activeTextEditor.setDecorations(newDecoration, []);
                    shown_pokemon = null;
                }
            });
            newDecoration = vscode.window.createTextEditorDecorationType({
                gutterIconSize: 'contain',
                gutterIconPath: vscode.Uri.parse(extensionPath + '/imgs/sprites/'+shown_pokemon+'.png')
            });
            var opts = {
                range: new vscode.Range(vscode.window.activeTextEditor.selection.active.line+1-1, 0, vscode.window.activeTextEditor.selection.active.line+1-1, 0),
                hoverMessage: ""
            }
            vscode.window.activeTextEditor.setDecorations(newDecoration, [opts]);
        }else if (n==3){
            var item_drop_possibilities = ['Pokeball', 'Pokeball', 'Pokeball', 'Pokeball', 'Pokeball', 'Greatball', 'Greatball', 'Ultraball', 'Razzberry'];
            var item_drops = [];
            item_drops.push(item_drop_possibilities[Math.floor(Math.random()*item_drop_possibilities.length)]);
            item_drops.push(item_drop_possibilities[Math.floor(Math.random()*item_drop_possibilities.length)]);
            item_drops.push(item_drop_possibilities[Math.floor(Math.random()*item_drop_possibilities.length)]);
            vscode.window.showInformationMessage('You picked up: '+item_drops[0]+', '+item_drops[1]+', and '+item_drops[2]+'!').then(function(){});
            items[item_drops[0]]++;
            items[item_drops[1]]++;
            items[item_drops[2]]++;
            save();
        }
    }
    
    vscode.window.onDidChangeTextEditorSelection(_walk, this);

}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    
    console.log('Congratulations, your extension "pokemon-code" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.startPokemonCode', function () {
        // The code you place here will be executed every time your command is executed

        init_tallgrass();

        // Display a message box to the user
        vscode.window.showInformationMessage('Your Pokemon journey has begun!', {});

    });

    var disposable2 = vscode.commands.registerCommand('extension.showPokemon', function () {
        // The code you place here will be executed every time your command is executed

        show_pokemon();

    });

    var disposable3 = vscode.commands.registerCommand('extension.showInventory', function () {
        // The code you place here will be executed every time your command is executed

        show_inventory();

    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(disposable2);
    context.subscriptions.push(disposable3);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;