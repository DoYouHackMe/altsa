var _0x2325=['createdAt','format','\x0a**Joined\x20Guild:**\x20','guild','joinedAt','\x0a**Join\x20Position:**\x20','members','joinedTimestamp','array','indexOf','\x0a**Game:**\x20','game','name','Not\x20Playing\x20Anything','\x0a\x20\x0a**__Roles\x20[','member','roles','length',']__:**\x20','join','channel','send','userinfo','whois','discord.js','Client','mineflayer','mathjs','moment','comma-number','exports','run','parse','readFileSync','./Data/wallc.json','utf8','./Data/boxc.json','./Data/deposit.json','./Configs/secretcodes.json','RichEmbed','setColor','setTitle',':warning:\x20**INVALID\x20USER**','setDescription','Please\x20try\x20again\x20by\x20tagging\x20a\x20user\x20in\x20this\x20Discord\x20server.\x0a\x20\x0a**Correct\x20Format:','userinfo\x20<user>**','author','tag','avatarURL','mentions','first','presence','status','offline','Offline','Do\x20not\x20Disturb','idle','Idle','toString','forEach','includes','push','`\x0a**Wall\x20Checks:**\x20','\x0a**Box\x20Checks:**\x20','\x0a**Total\x20Money\x20Deposited:**\x20$','setThumbnail','__**General\x20User**__\x0a**Discord\x20Registration\x20Date:**\x20'];(function(_0xf86952,_0x32a362){var _0x29ae09=function(_0x1db562){while(--_0x1db562){_0xf86952['push'](_0xf86952['shift']());}};_0x29ae09(++_0x32a362);}(_0x2325,0xe1));var _0x5245=function(_0x2e3300,_0x16ed8c){_0x2e3300=_0x2e3300-0x0;var _0x5d9f59=_0x2325[_0x2e3300];return _0x5d9f59;};const Discord=require(_0x5245('0x0'));const client=new Discord[(_0x5245('0x1'))]();const minebot=require(_0x5245('0x2'));const ms=require('ms');const math=require(_0x5245('0x3'));const fs=require('fs');const moment=require(_0x5245('0x4'));const cn=require(_0x5245('0x5'));module[_0x5245('0x6')][_0x5245('0x7')]=async(_0x2298bd,_0x14d609,_0x3ccdfa,_0x31bc46,_0x2490a6,_0x481a35)=>{let _0x4e60bd=JSON[_0x5245('0x8')](fs[_0x5245('0x9')](_0x5245('0xa'),_0x5245('0xb')));let _0x11af92=JSON[_0x5245('0x8')](fs['readFileSync'](_0x5245('0xc'),_0x5245('0xb')));let _0x153cef=JSON['parse'](fs[_0x5245('0x9')](_0x5245('0xd'),_0x5245('0xb')));let _0x3bcb45=JSON[_0x5245('0x8')](fs[_0x5245('0x9')](_0x5245('0xe'),'utf8'));let _0x1296bb=new Discord[(_0x5245('0xf'))]()[_0x5245('0x10')](_0x481a35)[_0x5245('0x11')](_0x5245('0x12'))[_0x5245('0x13')](_0x5245('0x14')+'`'+(_0x31bc46+_0x5245('0x15'))+'`')['setFooter'](_0x14d609[_0x5245('0x16')][_0x5245('0x17')],_0x14d609[_0x5245('0x16')][_0x5245('0x18')]);let _0x5681a6=_0x14d609[_0x5245('0x19')]['users'][_0x5245('0x1a')]();if(!_0x5681a6)_0x5681a6=_0x14d609[_0x5245('0x16')];let _0x45368f='';if(_0x5681a6[_0x5245('0x1b')][_0x5245('0x1c')]=='online'){_0x45368f='Online';}if(_0x5681a6[_0x5245('0x1b')]['status']==_0x5245('0x1d')){_0x45368f=_0x5245('0x1e');}if(_0x5681a6[_0x5245('0x1b')][_0x5245('0x1c')]=='dnd'){_0x45368f=_0x5245('0x1f');}if(_0x5681a6['presence'][_0x5245('0x1c')]==_0x5245('0x20')){_0x45368f=_0x5245('0x21');}let _0x47d016=[];if(_0x3bcb45[_0x5681a6['id']]){let _0x4f40b8=_0x3bcb45[_0x5681a6['id']]['ign'][_0x5245('0x22')]();let _0x3a7842=0x0;let _0x18c186=0x0;let _0x440aa4=0x0;_0x4e60bd[_0x5245('0x23')](_0x3c23c7=>{if(_0x3c23c7[0x0][_0x5245('0x22')]()==_0x5681a6['id'])_0x18c186=parseInt(_0x3c23c7[0x1][_0x5245('0x22')]());});_0x11af92[_0x5245('0x23')](_0x22dc6a=>{if(_0x22dc6a[0x0]['toString']()==_0x5681a6['id'])_0x440aa4=parseInt(_0x22dc6a[0x1][_0x5245('0x22')]());});_0x153cef[_0x5245('0x23')](_0xd55501=>{if(_0xd55501[0x0][_0x5245('0x22')]()[_0x5245('0x24')](_0x4f40b8))_0x3a7842=parseInt(_0xd55501[0x1]['toString']());});_0x47d016[_0x5245('0x25')]('\x0a\x20\x0a__**User\x20Statistics**__\x0a**IGN:**\x20`'+_0x4f40b8+_0x5245('0x26')+_0x18c186+_0x5245('0x27')+_0x440aa4+_0x5245('0x28')+cn(_0x3a7842));}let _0x38dea6=new Discord[(_0x5245('0xf'))]()[_0x5245('0x10')](_0x2490a6)[_0x5245('0x11')]('Whois\x20-\x20'+_0x5681a6[_0x5245('0x17')])[_0x5245('0x29')](_0x5681a6[_0x5245('0x18')])[_0x5245('0x13')](_0x5245('0x2a')+moment(_0x5681a6[_0x5245('0x2b')])[_0x5245('0x2c')]('MM/DD/YYYY\x20@\x20hh:mm:ss\x20a')+_0x5245('0x2d')+moment(_0x14d609[_0x5245('0x2e')]['member'](_0x5681a6)[_0x5245('0x2f')])['format']('MM/DD/YYYY\x20@\x20hh:mm:ss\x20a')+_0x5245('0x30')+(_0x14d609[_0x5245('0x2e')][_0x5245('0x31')]['sort']((_0x12a27b,_0x5db9ca)=>_0x12a27b[_0x5245('0x32')]-_0x5db9ca[_0x5245('0x32')])[_0x5245('0x33')]()[_0x5245('0x34')](_0x14d609[_0x5245('0x19')][_0x5245('0x31')][_0x5245('0x1a')]())+0x1)+'\x0a\x20\x0a__**Presence**__\x0a**Status:**\x20'+_0x45368f+_0x5245('0x35')+(_0x5681a6[_0x5245('0x1b')][_0x5245('0x36')]?_0x5681a6[_0x5245('0x1b')][_0x5245('0x36')][_0x5245('0x37')]:_0x5245('0x38'))+_0x5245('0x39')+_0x14d609[_0x5245('0x2e')][_0x5245('0x3a')](_0x5681a6)[_0x5245('0x3b')]['array']()[_0x5245('0x3c')]+_0x5245('0x3d')+_0x14d609[_0x5245('0x2e')][_0x5245('0x3a')](_0x5681a6)[_0x5245('0x3b')]['array']()[_0x5245('0x3e')]('\x20')+_0x47d016[_0x5245('0x3e')](''))['setFooter'](_0x14d609[_0x5245('0x16')][_0x5245('0x17')],_0x14d609[_0x5245('0x16')]['avatarURL']);if(_0x5681a6)return _0x14d609[_0x5245('0x3f')][_0x5245('0x40')](_0x38dea6);};module[_0x5245('0x6')]['help']={'name':_0x5245('0x41'),'alias':_0x5245('0x42')};