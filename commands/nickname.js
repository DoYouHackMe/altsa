var _0x550c=['content','split','slice','join',':white_check_mark:\x20Attempting\x20to\x20change\x20','\x27s\x20nickname\x20to\x20`','member','setNickname','catch',':x:\x20Unable\x20to\x20change\x20','\x27s\x20nickname.','help','nick','discord.js','Client','mineflayer','mathjs','exports','MANAGE_NICKNAMES','setTitle','setDescription','You\x20don\x27t\x20have\x20permission\x20to\x20use\x20this\x20command.','**Permission\x20Needed:**\x20','setTimestamp','setFooter','tag','author','avatarURL',':warning:\x20**INVALID\x20USER**','You\x20need\x20to\x20mention\x20a\x20user!\x20','**Correct\x20Syntax:**\x20','nickname\x20<user>\x20<new\x20nickname>','RichEmbed','setColor',':warning:\x20**INVALID\x20ARGS**','You\x20are\x20missing\x20some\x20arguments!\x20','guild','mentions','users','first','get','channel','send'];(function(_0x468be7,_0x359af){var _0x5b9fc4=function(_0x2fca84){while(--_0x2fca84){_0x468be7['push'](_0x468be7['shift']());}};_0x5b9fc4(++_0x359af);}(_0x550c,0x1e6));var _0x56ae=function(_0x4dcfb1,_0x7cd798){_0x4dcfb1=_0x4dcfb1-0x0;var _0x5375ec=_0x550c[_0x4dcfb1];return _0x5375ec;};const Discord=require(_0x56ae('0x0'));const client=new Discord[(_0x56ae('0x1'))]();const minebot=require(_0x56ae('0x2'));const ms=require('ms');const math=require(_0x56ae('0x3'));const fs=require('fs');module[_0x56ae('0x4')]['run']=async(_0x3e3156,_0x1e9e81,_0x292610,_0x151bd2,_0x558098,_0xd7aec1)=>{let _0x230f38=_0x56ae('0x5');let _0x29929c=new Discord['RichEmbed']()['setColor'](_0xd7aec1)[_0x56ae('0x6')](':warning:\x20**MISSING\x20PERMS**')[_0x56ae('0x7')](_0x56ae('0x8')+'\x0a'+'\x20'+'\x0a'+_0x56ae('0x9')+'`'+_0x230f38+'`')[_0x56ae('0xa')]()[_0x56ae('0xb')](_0x1e9e81['author'][_0x56ae('0xc')],_0x1e9e81[_0x56ae('0xd')][_0x56ae('0xe')]);if(_0x1e9e81['member']['hasPermission'](_0x230f38)){let _0xe42b77=new Discord['RichEmbed']()['setColor'](_0xd7aec1)[_0x56ae('0x6')](_0x56ae('0xf'))[_0x56ae('0x7')](_0x56ae('0x10')+'\x0a'+'\x20'+'\x0a'+_0x56ae('0x11')+'`'+(_0x151bd2+_0x56ae('0x12'))+'`')[_0x56ae('0xb')](_0x1e9e81['author']['tag'],_0x1e9e81['author'][_0x56ae('0xe')]);let _0x36471c=new Discord[(_0x56ae('0x13'))]()[_0x56ae('0x14')](_0xd7aec1)[_0x56ae('0x6')](_0x56ae('0x15'))['setDescription'](_0x56ae('0x16')+'\x0a'+'\x20'+'\x0a'+_0x56ae('0x11')+'`'+(_0x151bd2+_0x56ae('0x12'))+'`')[_0x56ae('0xb')](_0x1e9e81[_0x56ae('0xd')][_0x56ae('0xc')],_0x1e9e81['author'][_0x56ae('0xe')]);let _0x5d0880=_0x1e9e81[_0x56ae('0x17')]['member'](_0x1e9e81[_0x56ae('0x18')][_0x56ae('0x19')][_0x56ae('0x1a')]()||_0x1e9e81[_0x56ae('0x17')]['members'][_0x56ae('0x1b')](_0x292610[0x0]));let _0x478723=_0x1e9e81[_0x56ae('0x18')][_0x56ae('0x19')][_0x56ae('0x1a')]();if(!_0x5d0880)return _0x1e9e81[_0x56ae('0x1c')][_0x56ae('0x1d')](_0xe42b77);let _0x20559e=_0x1e9e81[_0x56ae('0x1e')][_0x56ae('0x1f')]('\x20');let _0x1c696a=_0x20559e[_0x56ae('0x20')](0x2);let _0x4bb1e3=_0x1c696a[_0x56ae('0x21')]('\x20');if(!_0x4bb1e3)return _0x1e9e81[_0x56ae('0x1c')]['send'](_0x36471c);_0x1e9e81[_0x56ae('0x1c')]['send'](_0x1e9e81['channel'][_0x56ae('0x1d')](new Discord[(_0x56ae('0x13'))]()[_0x56ae('0x14')](_0x558098)[_0x56ae('0x7')](_0x56ae('0x22')+_0x478723+_0x56ae('0x23')+_0x4bb1e3+'`')));_0x1e9e81[_0x56ae('0x17')][_0x56ae('0x24')](_0x478723)[_0x56ae('0x25')](_0x4bb1e3)[_0x56ae('0x26')](_0x42ac8f=>{if(_0x42ac8f)return _0x1e9e81[_0x56ae('0x1c')]['send'](new Discord['RichEmbed']()[_0x56ae('0x14')](_0xd7aec1)[_0x56ae('0x7')](_0x56ae('0x27')+_0x5d0880+_0x56ae('0x28')));});}else return _0x1e9e81['channel'][_0x56ae('0x1d')](_0x29929c);};module[_0x56ae('0x4')][_0x56ae('0x29')]={'name':'nickname','alias':_0x56ae('0x2a')};