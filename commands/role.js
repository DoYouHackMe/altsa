var _0x4841=['bestMatch','target','roles','indexOf','@everyone','addRole',':white_check_mark:\x20Added\x20','find','removeRole','\x20from\x20','exports','help','Client','mineflayer','mathjs','run','ADMINISTRATOR','RichEmbed','setColor','setTitle',':warning:\x20**MISSING\x20PERMS**','setDescription','**Permission\x20Needed:**\x20','author','avatarURL','member','hasPermission',':warning:\x20**INVALID\x20USER**','**Correct\x20Syntax:**\x20','role\x20<user>\x20<role>','tag','mentions','first','channel','send','guild','members','get',':warning:\x20**INVALID\x20ROLE**','There\x20is\x20no\x20role\x20with\x20the\x20specified\x20name.','**Format:**\x20','setTimestamp','setFooter','forEach','push','name'];(function(_0xabf6e0,_0x2fd1cd){var _0x376024=function(_0x614329){while(--_0x614329){_0xabf6e0['push'](_0xabf6e0['shift']());}};_0x376024(++_0x2fd1cd);}(_0x4841,0x17c));var _0x3cb1=function(_0x414724,_0x3bfb21){_0x414724=_0x414724-0x0;var _0x16a991=_0x4841[_0x414724];return _0x16a991;};const Discord=require('discord.js');const client=new Discord[(_0x3cb1('0x0'))]();const minebot=require(_0x3cb1('0x1'));const ms=require('ms');const math=require(_0x3cb1('0x2'));const fs=require('fs');const sm=require('string-similarity');module['exports'][_0x3cb1('0x3')]=async(_0x3e451e,_0x180560,_0x428ed3,_0x32ccd8,_0x41402a,_0x193e01)=>{let _0x311d2a=_0x3cb1('0x4');let _0x642caf=new Discord[(_0x3cb1('0x5'))]()[_0x3cb1('0x6')](_0x193e01)[_0x3cb1('0x7')](_0x3cb1('0x8'))[_0x3cb1('0x9')]('You\x20don\x27t\x20have\x20permission\x20to\x20use\x20this\x20command.'+'\x0a'+'\x20'+'\x0a'+_0x3cb1('0xa')+'`'+_0x311d2a+'`')['setTimestamp']()['setFooter'](_0x180560[_0x3cb1('0xb')]['tag'],_0x180560[_0x3cb1('0xb')][_0x3cb1('0xc')]);if(_0x180560[_0x3cb1('0xd')][_0x3cb1('0xe')](_0x311d2a)){let _0x543a6e=new Discord['RichEmbed']()['setColor'](_0x193e01)[_0x3cb1('0x7')](_0x3cb1('0xf'))[_0x3cb1('0x9')]('You\x20need\x20to\x20mention\x20a\x20user!\x20'+'\x0a'+'\x20'+'\x0a'+_0x3cb1('0x10')+'`'+(_0x32ccd8+_0x3cb1('0x11'))+'`')['setFooter'](_0x180560[_0x3cb1('0xb')][_0x3cb1('0x12')],_0x180560['author'][_0x3cb1('0xc')]);let _0x3d110f=_0x180560[_0x3cb1('0x13')]['users'][_0x3cb1('0x14')]();if(!_0x3d110f)return _0x180560[_0x3cb1('0x15')][_0x3cb1('0x16')](_0x543a6e);let _0xed06bf=_0x180560[_0x3cb1('0x17')][_0x3cb1('0x18')][_0x3cb1('0x19')](_0x3d110f['id']);let _0x4abf04=new Discord[(_0x3cb1('0x5'))]()[_0x3cb1('0x6')](_0x193e01)['setTitle'](_0x3cb1('0x1a'))[_0x3cb1('0x9')](_0x3cb1('0x1b')+'\x0a'+'\x20'+'\x0a'+_0x3cb1('0x1c')+'`'+_0x32ccd8+_0x3cb1('0x11')+'`')[_0x3cb1('0x1d')]()[_0x3cb1('0x1e')](_0x180560[_0x3cb1('0xb')][_0x3cb1('0x12')],_0x180560[_0x3cb1('0xb')][_0x3cb1('0xc')]);let _0x3e474b=_0x428ed3[0x1];var _0x5978ec=[];var _0x4a7c6a=[];_0x180560[_0x3cb1('0x17')]['roles'][_0x3cb1('0x1f')](function(_0x573124){_0x5978ec[_0x3cb1('0x20')](_0x573124[_0x3cb1('0x21')]);_0x4a7c6a['push'](_0x573124['id']);});if(!_0x3e474b)return _0x180560[_0x3cb1('0x15')][_0x3cb1('0x16')](_0x4abf04);let _0xb8eb18=sm['findBestMatch'](_0x3e474b,_0x5978ec);let _0x4f20e2=_0xb8eb18[_0x3cb1('0x22')][_0x3cb1('0x23')];let _0x48a8d7=_0x180560[_0x3cb1('0x17')][_0x3cb1('0x24')][_0x3cb1('0x19')](_0x4a7c6a[_0x5978ec[_0x3cb1('0x25')](_0x4f20e2)]);if(_0x48a8d7[_0x3cb1('0x21')]==_0x3cb1('0x26'))return;if(!_0x48a8d7)return _0x180560[_0x3cb1('0x15')][_0x3cb1('0x16')](_0x4abf04);if(!_0xed06bf['roles']['find'](_0x12a4c5=>_0x12a4c5['id']===_0x48a8d7['id'])){_0xed06bf[_0x3cb1('0x27')](_0x48a8d7['id']);_0x180560[_0x3cb1('0x15')][_0x3cb1('0x16')](new Discord[(_0x3cb1('0x5'))]()[_0x3cb1('0x6')](_0x41402a)['setDescription'](_0x3cb1('0x28')+_0x48a8d7+'\x20to\x20'+_0x3d110f));}if(_0xed06bf[_0x3cb1('0x24')][_0x3cb1('0x29')](_0x195498=>_0x195498['id']===_0x48a8d7['id'])){_0xed06bf[_0x3cb1('0x2a')](_0x48a8d7['id']);_0x180560[_0x3cb1('0x15')][_0x3cb1('0x16')](new Discord[(_0x3cb1('0x5'))]()[_0x3cb1('0x6')](_0x41402a)[_0x3cb1('0x9')](':white_check_mark:\x20Removed\x20'+_0x48a8d7+_0x3cb1('0x2b')+_0x3d110f));}}else return _0x180560[_0x3cb1('0x15')][_0x3cb1('0x16')](_0x642caf);};module[_0x3cb1('0x2c')][_0x3cb1('0x2d')]={'name':'role'};