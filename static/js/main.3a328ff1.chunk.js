(this["webpackJsonpcolors-project"]=this["webpackJsonpcolors-project"]||[]).push([[0],{207:function(e,a,t){e.exports=t(394)},212:function(e,a,t){},394:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(8),l=t.n(r),c=(t(212),t(86)),i=t(23),s=t(24),m=t(12),d=t(29),u=t(28),h=t(22),p=t(181),f=t(58),b=t.n(f),g={ColorBox:{width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-4.5px","&:hover button":{opacity:1}},copyText:{color:function(e){return b()(e.background).luminance()>=.62?"black":"white"}},colorName:{color:function(e){return b()(e.background).luminance()<=.08?"white":"black"}},seeMore:{background:"rgba(255,255,255,0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",color:function(e){return b()(e.background).luminance()>=.62?"rgba(0,0,0,0.69)":"white"},width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255,255,255,0.3)",fontSize:"1rem",lineHeight:"30px",color:function(e){return b()(e.background).luminance()>=.62?"rgba(0,0,0,0.69)":"white"},textTransform:"uppercase",border:"none",textDecoration:"none",cursor:"pointer",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:0,zIndex:0,height:"100%",width:"100%",transition:"transform 0.6s ease-in-out"},showOverlay:{opacity:1,transform:"scale(50)",zIndex:10,position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":{fontWeight:400,textShadow:"1px 2px black",background:"rgba(255,255,255,0.2)",width:"100%",textAlign:"center",marginBottom:0,padding:"1rem",textTransform:"uppercase"},"& p":{fontSize:"2rem",fontWeight:100}},showCopyMessage:{opacity:1,transform:"scale(1)",zIndex:25,transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},v=t(396),C=t(43),y=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(m.a)(o)),o}return Object(s.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.paletteId,r=e.id,l=e.showingFullPalette,c=e.classes,i=this.state.copied;return n.a.createElement(p.CopyToClipboard,{text:t,onCopy:this.changeCopyState},n.a.createElement("div",{style:{background:t},className:c.ColorBox},n.a.createElement("div",{style:{background:t},className:"".concat(c.copyOverlay," ").concat(i&&c.showOverlay)}),n.a.createElement("div",{className:"".concat(c.copyMessage," ").concat(i&&c.showCopyMessage)},n.a.createElement("h1",null,"Copied!"),n.a.createElement("p",{className:c.copyText},t)),n.a.createElement("div",{className:!0},n.a.createElement("div",{className:c.boxContent},n.a.createElement("span",{className:c.colorName},a)),n.a.createElement("button",{className:c.copyButton},"Copy")),l&&n.a.createElement(C.b,{to:"/palette/".concat(o,"/").concat(r),onClick:function(e){return e.stopPropagation()}},n.a.createElement("span",{className:c.seeMore},"MORE"))))}}]),t}(o.Component),E=Object(v.a)(g)(y),x=t(452),k=t(455),w=t(453),j=t(184),S=t.n(j),O=t(441),N=t(190),F=(t(221),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={format:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(m.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(m.a)(o)),o}return Object(s.a)(t,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.classes,r=this.state,l=r.format,c=r.open;return n.a.createElement("header",{className:o.Navbar},n.a.createElement(C.b,{className:o.logo,to:"/"},"reactcolorpicker"),this.props.showSlider&&n.a.createElement("div",null,n.a.createElement("span",null,"Level: ",a),n.a.createElement("div",{className:o.slider},n.a.createElement(N.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),n.a.createElement("div",{className:o.selectContainer},n.a.createElement(x.a,{value:l,onChange:this.handleFormatChange},n.a.createElement(k.a,{value:"hex"}," HEX - #fffff"),n.a.createElement(k.a,{value:"rgb"}," RGB - rgb(255,255,255)"),n.a.createElement(k.a,{value:"rgba"}," RGBA - rgba(255,255,255,1.0)"))),n.a.createElement(w.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:c,autoHideDuration:3e3,message:n.a.createElement("span",{id:"message-id"}," Format Changed To ",l.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[n.a.createElement(O.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},n.a.createElement(S.a,null))]}))}}]),t}(o.Component)),P=Object(v.a)({Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:{marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},slider:{width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},selectContainer:{marginLeft:"auto",marginRight:"1rem"}})(F);var B=Object(v.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontsize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return n.a.createElement("footer",{className:o.PaletteFooter},a,n.a.createElement("span",{className:o.emoji},t))})),D={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:{width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-4.5px",opacity:1,backgroundColor:"black","& a":{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255,255,255,0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",textTransform:"uppercase",border:"none",textDecoration:"none",cursor:"pointer"}}},I=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(m.a)(o)),o.changeFormat=o.changeFormat.bind(Object(m.a)(o)),o}return Object(s.a)(t,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,r=e.id,l=this.props.classes,c=this.state,i=c.level,s=c.format,m=a[i].map((function(e){return n.a.createElement(E,{background:e[s],name:e.name,key:e.id,id:e.id,showingFullPalette:!0,paletteId:r})}));return n.a.createElement("div",{className:l.Palette},n.a.createElement(P,{level:i,handleChange:this.changeFormat,changeLevel:this.changeLevel,showSlider:!0}),n.a.createElement("div",{className:l.colors},m),n.a.createElement(B,{paletteName:t,emoji:o}))}}]),t}(o.Component),A=Object(v.a)(D)(I),L=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],R=t(133),G=[50,100,200,300,400,500,600,700,800,900];function M(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(R.a)(G);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,l,c,i=Object(R.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,m=(l=s.color,c=10,b.a.scale(function(e){return[b()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse();for(var d in m)t.colors[G[d]].push({name:"".concat(s.name," ").concat(G[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[d],rgb:b()(m[d]).css(),rgba:b()(m[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(u){i.e(u)}finally{i.f()}return t}var T=Object(v.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-4px"}})((function(e){var a=e.classes,t=e.paletteName,o=e.emoji,r=e.colors,l=e.handleClick,c=r.map((function(e){return n.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return n.a.createElement("div",{className:a.root,onClick:l},n.a.createElement("div",{className:a.colors},c),n.a.createElement("h5",{className:a.title},t," ",n.a.createElement("span",{className:a.emoji},o)))})),z=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes;return n.a.createElement("div",{className:o.root},n.a.createElement("div",{className:o.container},n.a.createElement("nav",{className:o.nav},n.a.createElement("h1",null,"React Colors"),n.a.createElement(C.b,{to:"/palette/new"},"Create Palette")),n.a.createElement("div",{className:o.palettes},t.map((function(a){return n.a.createElement(T,Object.assign({},a,{handleClick:function(){return e.goToPalette(a.id)}}))})))))}}]),t}(o.Component),U=Object(v.a)({root:{backgroundColor:"blue",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white"}},palettes:{boxSizing:"broder-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"5%"}})(z),H=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e))._shades=o.gatherShades(o.props.palette,o.props.colorId),o.state={format:"hex"},o.changeFormat=o.changeFormat.bind(Object(m.a)(o)),o}return Object(s.a)(t,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,r=a.id,l=this.props.classes,c=this._shades.map((function(a){return n.a.createElement(E,{key:a.name,name:a.name,background:a[e],showingFullPalette:!1})}));return console.log(this._shades),n.a.createElement("div",{className:l.Palette},n.a.createElement(P,{handleChange:this.changeFormat,showSlider:!1}),n.a.createElement("div",{className:l.colors},c,n.a.createElement("div",{className:l.goBack},n.a.createElement(C.b,{to:"/palette/".concat(r)},"GO BACK"))),n.a.createElement(B,{paletteName:t,emoji:o}))}}]),t}(o.Component),q=Object(v.a)(D)(H),V=t(53),W=t(134),J=t(16),Y=t.n(J),K=t(6),_=t(454),Q=t(195),X=t(451),$=t(189),Z=t.n($),ee=t(447),ae=t(74),te=t(185),oe=t.n(te),ne=Object(ae.b)((function(e){var a=e.classes,t=e.handleDelete,o=e.name,r=e.color;return n.a.createElement("div",{className:a.root,style:{backgroundColor:r}},n.a.createElement("div",{className:a.boxContent},n.a.createElement("span",null,o),n.a.createElement(oe.a,{className:a.deleteIcon,onClick:t})))})),re=Object(v.a)({root:{width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.25)"}},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"rgba(0,0,0,0.5)",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between",alignItems:"flex-end"},deleteIcon:{transition:"all 0.3s ease-in-out"}})(ne),le=Object(ae.a)((function(e){var a=e.colors,t=e.removeColor;return n.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return n.a.createElement(re,{color:e.color,name:e.name,key:e.name,index:a,handleDelete:function(){return t(e.name)}})})))})),ce=t(448),ie=t(449),se=t(450),me=t(442),de=t(446),ue=t(444),he=t(445),pe=t(443),fe=t(57),be=t(191),ge=(t(230),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.state={stage:"form",newPaletteName:""},o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.showEmojiPicker=o.showEmojiPicker.bind(Object(m.a)(o)),o.savePalette=o.savePalette.bind(Object(m.a)(o)),o}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fe.ValidatorForm.addValidationRule("PaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(V.a)({},e.target.name,e.target.value))}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a)}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props,r=o.hideForm;o.handleSubmit;return n.a.createElement("div",null,n.a.createElement(me.a,{open:"emoji"===t,onClose:r},n.a.createElement(pe.a,{id:"form-dialog-title"},"Choose A Palette Emoji"),n.a.createElement(be.a,{title:"Pick a Palette Emoji",onSelect:this.savePalette})),n.a.createElement(me.a,{open:"form"===t,"aria-labelledby":"form-dialog-title",onClose:r},n.a.createElement(pe.a,{id:"form-dialog-title"},"Choose A Palette Name"),n.a.createElement(fe.ValidatorForm,{onSubmit:this.showEmojiPicker},n.a.createElement(ue.a,null,n.a.createElement(he.a,null,"Please Enter A Name For Your New Beautiful Colorboard. Make Sure It's Unique!"),n.a.createElement(fe.TextValidator,{name:"newPaletteName",value:a,label:"Palette Name",fullWidth:!0,margin:"normal",onChange:this.handleChange,validators:["required","PaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})),n.a.createElement(de.a,null,n.a.createElement(ee.a,{onClick:r},"Cancel"),n.a.createElement(ee.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),t}(o.Component)),ve=t(187),Ce=t.n(ve),ye=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={newPaletteName:"",formShowing:!1},o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.showForm=o.showForm.bind(Object(m.a)(o)),o.hideForm=o.hideForm.bind(Object(m.a)(o)),o}return Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(V.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,r=e.handleSubmit;return n.a.createElement("div",{className:a.root},n.a.createElement(ce.a,null),n.a.createElement(ie.a,{position:"fixed",color:"default",className:Y()(a.appBar,Object(V.a)({},a.appBarShift,t))},n.a.createElement(se.a,{disableGutters:!t},n.a.createElement(O.a,{color:"inherit","aria-label":"Open drawer",onClick:this.props.handleDrawerOpen,className:Y()(a.menuButton,t&&a.hide)},n.a.createElement(Ce.a,null)),n.a.createElement(Q.a,{variant:"h6",color:"inherit",noWrap:!0},"Create A Palette")),n.a.createElement("div",{className:a.navBtns},n.a.createElement(C.b,{to:"/"},n.a.createElement(ee.a,{variant:"contained",color:"secondary",className:a.button},"Go Back")),n.a.createElement(ee.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button},"Save"))),this.state.formShowing&&n.a.createElement(ge,{palettes:o,handleSubmit:r,hideForm:this.hideForm}))}}]),t}(o.Component),Ee=Object(K.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:{marginRight:"1rem","& a":{textDecoration:"none"}},button:{margin:"0 0.5rem"}}}),{withTheme:!0})(ye),xe=t(188),ke=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={currentColor:"teal",newColorName:""},o.updateCurrentColor=o.updateCurrentColor.bind(Object(m.a)(o)),o.handleChange=o.handleChange.bind(Object(m.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(m.a)(o)),o}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fe.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),fe.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(V.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this,a=this.props,t=a.paletteIsFull,o=a.classes,r=this.state,l=r.currentColor,c=r.newColorName;return n.a.createElement("div",null,n.a.createElement(xe.ChromePicker,{className:o.picker,color:l,onChangeComplete:function(a){return e.updateCurrentColor(a)}}),n.a.createElement(fe.ValidatorForm,{onSubmit:this.handleSubmit},n.a.createElement(fe.TextValidator,{name:"newColorName",className:o.colorNameInput,placeholder:"Color Name",value:c,onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used"],variant:"filled",margin:"normal"}),n.a.createElement(ee.a,{className:o.addColor,disabled:t,variant:"contained",type:"submit",color:"primary",style:{backgroundColor:t?"grey":l}},t?"Palette Full":"Add Color")))}}]),t}(o.Component),we=Object(v.a)({picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}})(ke),je=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(ae.c)(o,a,t)}}))},o.state={open:!0,currentColor:"teal",colors:o.props.palettes[0].colors},o.addNewColor=o.addNewColor.bind(Object(m.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(m.a)(o)),o.removeColor=o.removeColor.bind(Object(m.a)(o)),o.clearColors=o.clearColors.bind(Object(m.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(m.a)(o)),o}return Object(s.a)(t,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(c.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){var e=this.props.palettes.map((function(e){return e.colors})).flat(),a=e[Math.floor(Math.random()*e.length)];this.setState({colors:[].concat(Object(c.a)(this.state.colors),[a])}),console.log(e)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,r=this.state,l=r.open,c=r.colors,i=c.length>=t;return n.a.createElement("div",{className:a.root},n.a.createElement(Ee,{open:l,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),n.a.createElement(_.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},n.a.createElement("div",{className:a.drawerHeader},n.a.createElement(O.a,{onClick:this.handleDrawerClose},n.a.createElement(Z.a,null))),n.a.createElement("div",{className:a.container},n.a.createElement(X.a,null),n.a.createElement(Q.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),n.a.createElement("div",{className:a.buttons},n.a.createElement(ee.a,{className:a.button,variant:"contained",color:"secondary",onClick:this.clearColors},"Clear Palette"),n.a.createElement(ee.a,{className:a.button,disabled:i,variant:"contained",color:"primary",onClick:this.addRandomColor},"Random Color")),n.a.createElement(we,{paletteIsFull:i,addNewColor:this.addNewColor,colors:c}))),n.a.createElement("main",{className:Y()(a.content,Object(V.a)({},a.contentShift,l))},n.a.createElement("div",{className:a.drawerHeader}),n.a.createElement(le,{colors:c,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd})))}}]),t}(o.Component);je.defaultProps={maxColors:20};var Se=Object(K.a)((function(e){return{root:{display:"flex"},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(W.a)(Object(W.a)({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{height:"100%",width:"90%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}}),{withTheme:!0})(je),Oe=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o;return Object(i.a)(this,t),(o=a.call(this,e)).state={palettes:L},o.savePalette=o.savePalette.bind(Object(m.a)(o)),o.findPalette=o.findPalette.bind(Object(m.a)(o)),o}return Object(s.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(c.a)(this.state.palettes),[e])})}},{key:"render",value:function(){var e=this;return n.a.createElement(h.c,null,n.a.createElement(h.a,{exact:!0,path:"/",render:function(a){return n.a.createElement(U,Object.assign({palettes:e.state.palettes},a))}}),n.a.createElement(h.a,{exact:!0,path:"/palette/new",render:function(a){return n.a.createElement(Se,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a))}}),n.a.createElement(h.a,{exact:!0,path:"/palette/:id",render:function(a){return n.a.createElement(A,{palette:M(e.findPalette(a.match.params.id))})}}),n.a.createElement(h.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return n.a.createElement(q,{colorId:a.match.params.colorId,palette:M(e.findPalette(a.match.params.paletteId))})}}))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(C.a,null,n.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[207,1,2]]]);
//# sourceMappingURL=main.3a328ff1.chunk.js.map