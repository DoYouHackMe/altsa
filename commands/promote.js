var _0x29a3=['member','roles','find','readFile','./Configs/config.json','utf8','RichEmbed','setDescription','You\x20need\x20to\x20mention\x20a\x20user!\x20','**Correct\x20Syntax:**\x20','promote\x20<user>','mentions','users','first','channel','guild','members','get','send','channels','memberchannel_channelID',':x:\x20Please\x20get\x20a\x20server\x20administrator\x20to\x20configure\x20.settings\x20(The\x20current\x20value\x20set\x20for\x20`memberchannel_channelID`\x20is\x20invalid)','Promoted\x20Member',':white_check_mark:\x20Promoted\x20','!\x20\x0a\x20\x0aPlease\x20Type\x20roles\x20to\x20change\x20to\x20',',\x20say\x20the\x20role\x20to\x20remove\x20first\x20then\x20say\x20the\x20role\x20to\x20add,\x20the\x20roles\x20being\x20separated\x20by\x20a\x20comma.\x20(Mod,\x20CoLeader)\x0a\x20\x0aTo\x20not\x20change\x20any\x20roles,\x20type\x20`exit`','awaitMessages','then','content','split','toString','forEach','push','name','findBestMatch','bestMatch','target','indexOf','@everyone',':x:\x20`','`\x20doesn\x27t\x20seem\x20to\x20be\x20a\x20valid\x20role.','highestRole','\x20is\x20higher\x20than\x20your\x20highest\x20role\x20(','\x20doesn\x27t\x20have\x20the\x20role\x20','removeRole',':white_check_mark:\x20Removing\x20the\x20role\x20','\x20from\x20','comparePositionTo',':x:\x20','hasPermission','ADMINISTRATOR',':x:\x20I\x20cannot\x20add\x20the\x20role\x20','\x20to\x20','\x20as\x20this\x20role\x20could\x20be\x20used\x20for\x20abuse.','addRole',':white_check_mark:\x20Adding\x20the\x20role\x20','catch','exports','help','Client','mineflayer','mathjs','run','Manager','setColor','setTitle',':warning:\x20**MISSING\x20PERMS**','You\x20don\x27t\x20have\x20permission\x20to\x20use\x20this\x20command.','**Permission\x20Needed:**\x20','setTimestamp','setFooter','tag','author','avatarURL'];(function(_0x445772,_0x38f4ba){var _0x292040=function(_0x48a843){while(--_0x48a843){_0x445772['push'](_0x445772['shift']());}};_0x292040(++_0x38f4ba);}(_0x29a3,0x163));var _0x5399=function(_0x5ea043,_0x59a845){_0x5ea043=_0x5ea043-0x0;var _0x5daeed=_0x29a3[_0x5ea043];return _0x5daeed;};const Discord=require('discord.js');const client=new Discord[(_0x5399('0x0'))]();const minebot=require(_0x5399('0x1'));const ms=require('ms');const math=require(_0x5399('0x2'));const fs=require('fs');const sm=require('string-similarity');module['exports'][_0x5399('0x3')]=async(_0x45b648,_0x4ebf48,_0x1e7e86,_0x47e1c9,_0x41ad8d,_0x11e666)=>{let _0x289479=_0x5399('0x4');let _0xd5464e=new Discord['RichEmbed']()[_0x5399('0x5')](_0x11e666)[_0x5399('0x6')](_0x5399('0x7'))['setDescription'](_0x5399('0x8')+'\x0a'+'\x20'+'\x0a'+_0x5399('0x9')+'`'+_0x289479+'`')[_0x5399('0xa')]()[_0x5399('0xb')](_0x4ebf48['author'][_0x5399('0xc')],_0x4ebf48[_0x5399('0xd')][_0x5399('0xe')]);if(_0x4ebf48[_0x5399('0xf')][_0x5399('0x10')][_0x5399('0x11')](_0x3a5c20=>_0x3a5c20['name']==_0x289479)){fs[_0x5399('0x12')](_0x5399('0x13'),_0x5399('0x14'),function(_0x147679,_0x1249e4){var _0x4ff9ae=JSON['parse'](_0x1249e4);let _0xe62823=new Discord[(_0x5399('0x15'))]()[_0x5399('0x5')](_0x11e666)['setTitle'](':warning:\x20**INVALID\x20USER**')[_0x5399('0x16')](_0x5399('0x17')+'\x0a'+'\x20'+'\x0a'+_0x5399('0x18')+'`'+(_0x47e1c9+_0x5399('0x19'))+'`')[_0x5399('0xb')](_0x4ebf48['author']['tag'],_0x4ebf48[_0x5399('0xd')][_0x5399('0xe')]);let _0x48fe0c=_0x4ebf48[_0x5399('0x1a')][_0x5399('0x1b')][_0x5399('0x1c')]();if(!_0x48fe0c)return _0x4ebf48[_0x5399('0x1d')]['send'](_0xe62823);let _0x54507b=_0x4ebf48[_0x5399('0x1e')][_0x5399('0x1f')][_0x5399('0x20')](_0x48fe0c['id']);if(!_0x4ff9ae[_0x4ebf48[_0x5399('0x1e')]['id']])return _0x4ebf48['channel'][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()[_0x5399('0x5')](_0x11e666)[_0x5399('0x6')](':x:\x20Please\x20get\x20a\x20server\x20administrator\x20to\x20configure\x20.settings'));let _0x573453=_0x4ebf48[_0x5399('0x1e')][_0x5399('0x22')]['get'](_0x4ff9ae[_0x4ebf48[_0x5399('0x1e')]['id']][_0x5399('0x23')]);if(!_0x573453)return _0x4ebf48['channel'][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()[_0x5399('0x5')](_0x11e666)[_0x5399('0x6')](_0x5399('0x24')));let _0x487666=new Discord['RichEmbed']()[_0x5399('0x5')](_0x41ad8d)[_0x5399('0x6')](_0x5399('0x25'))[_0x5399('0x16')]('▲\x20'+_0x48fe0c)[_0x5399('0xb')](_0x4ebf48[_0x5399('0xd')][_0x5399('0xc')],_0x4ebf48[_0x5399('0xd')][_0x5399('0xe')]);_0x573453[_0x5399('0x21')](_0x487666);_0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](new Discord['RichEmbed']()[_0x5399('0x5')](_0x41ad8d)['setDescription'](_0x5399('0x26')+_0x48fe0c+_0x5399('0x27')+_0x48fe0c+_0x5399('0x28')));const _0x2c7315=_0x3ede76=>_0x3ede76['author']['id']===_0x4ebf48[_0x5399('0xd')]['id'];_0x4ebf48[_0x5399('0x1d')][_0x5399('0x29')](_0x2c7315,{'max':0x1,'time':0x7a120})[_0x5399('0x2a')](_0x8265d9=>{let _0x227b6f=''+_0x8265d9[_0x5399('0x1c')]()[_0x5399('0x2b')];if(_0x227b6f=='exit'){_0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()[_0x5399('0x5')](_0x41ad8d)[_0x5399('0x6')](':white_check_mark:\x20Exiting\x20the\x20role\x20editing\x20process.'));return;}let _0x1f95d4=_0x227b6f[_0x5399('0x2c')](',');if(_0x1f95d4[0x0]){var _0x367e5b=_0x1f95d4[0x0][_0x5399('0x2d')]();var _0x4d5d0f=[];var _0x48e52a=[];_0x4ebf48[_0x5399('0x1e')]['roles'][_0x5399('0x2e')](function(_0x5e9324){_0x4d5d0f[_0x5399('0x2f')](_0x5e9324[_0x5399('0x30')]);_0x48e52a[_0x5399('0x2f')](_0x5e9324['id']);});let _0x203727=sm[_0x5399('0x31')](_0x367e5b,_0x4d5d0f);let _0x3cab47=_0x203727[_0x5399('0x32')][_0x5399('0x33')];let _0x8c8cc3=_0x4ebf48[_0x5399('0x1e')][_0x5399('0x10')][_0x5399('0x20')](_0x48e52a[_0x4d5d0f[_0x5399('0x34')](_0x3cab47)]);if(_0x8c8cc3[_0x5399('0x30')]==_0x5399('0x35'))return;if(!_0x8c8cc3)return _0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()[_0x5399('0x5')](_0x11e666)[_0x5399('0x6')](_0x5399('0x36')+_0x367e5b+_0x5399('0x37')));if(_0x8c8cc3['comparePositionTo'](_0x4ebf48[_0x5399('0x1e')][_0x5399('0xf')](_0x4ebf48[_0x5399('0xd')]['id'])[_0x5399('0x38')])>0x0)return _0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](new Discord['RichEmbed']()[_0x5399('0x5')](_0x11e666)[_0x5399('0x16')](':x:\x20'+_0x8c8cc3+_0x5399('0x39')+_0x4ebf48[_0x5399('0x1e')][_0x5399('0xf')](_0x4ebf48[_0x5399('0xd')]['id'])[_0x5399('0x38')]+').'));if(!_0x4ebf48['guild'][_0x5399('0xf')](_0x48fe0c['id'])[_0x5399('0x10')][_0x5399('0x11')](_0x367e5b=>_0x367e5b['id']==_0x8c8cc3['id']))return _0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()['setColor'](_0x11e666)[_0x5399('0x16')](':x:\x20'+_0x48fe0c+_0x5399('0x3a')+_0x8c8cc3));_0x4ebf48[_0x5399('0x1e')][_0x5399('0xf')](_0x48fe0c['id'])[_0x5399('0x3b')](_0x8c8cc3['id']);_0x4ebf48['channel'][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()[_0x5399('0x5')](_0x41ad8d)['setDescription'](_0x5399('0x3c')+_0x8c8cc3+_0x5399('0x3d')+_0x48fe0c));}if(_0x1f95d4[0x1]){var _0x367e5b=_0x1f95d4[0x1][_0x5399('0x2d')]();var _0x4d5d0f=[];var _0x48e52a=[];_0x4ebf48['guild']['roles'][_0x5399('0x2e')](function(_0xb5d191){_0x4d5d0f[_0x5399('0x2f')](_0xb5d191[_0x5399('0x30')]);_0x48e52a[_0x5399('0x2f')](_0xb5d191['id']);});let _0x26d9b7=sm[_0x5399('0x31')](_0x367e5b,_0x4d5d0f);let _0x3cab47=_0x26d9b7['bestMatch'][_0x5399('0x33')];let _0x8c8cc3=_0x4ebf48['guild'][_0x5399('0x10')][_0x5399('0x20')](_0x48e52a[_0x4d5d0f['indexOf'](_0x3cab47)]);if(_0x8c8cc3[_0x5399('0x30')]=='@everyone')return;if(!_0x8c8cc3)return _0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()[_0x5399('0x5')](_0x11e666)[_0x5399('0x6')](_0x5399('0x36')+_0x367e5b+_0x5399('0x37')));if(_0x8c8cc3[_0x5399('0x3e')](_0x4ebf48[_0x5399('0x1e')][_0x5399('0xf')](_0x4ebf48[_0x5399('0xd')]['id'])[_0x5399('0x38')])>0x0)return _0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()[_0x5399('0x5')](_0x11e666)[_0x5399('0x16')](_0x5399('0x3f')+_0x8c8cc3+_0x5399('0x39')+_0x4ebf48[_0x5399('0x1e')]['member'](_0x4ebf48[_0x5399('0xd')]['id'])['highestRole']+').'));if(_0x8c8cc3[_0x5399('0x40')](_0x5399('0x41')))return _0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()[_0x5399('0x5')](_0x11e666)['setDescription'](_0x5399('0x42')+_0x8c8cc3+_0x5399('0x43')+_0x48fe0c+_0x5399('0x44')));_0x4ebf48[_0x5399('0x1e')][_0x5399('0xf')](_0x48fe0c['id'])[_0x5399('0x45')](_0x8c8cc3['id']);_0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()[_0x5399('0x5')](_0x41ad8d)['setDescription'](_0x5399('0x46')+_0x8c8cc3+_0x5399('0x43')+_0x48fe0c));}})[_0x5399('0x47')](_0x147679=>{console['log'](_0x147679);_0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](new Discord[(_0x5399('0x15'))]()['setColor'](_0x11e666)['setDescription'](':x:\x20The\x20time\x20limit\x20has\x20ran\x20out\x20or\x20an\x20error\x20has\x20occured\x20with\x20this\x20command.'));});});}else return _0x4ebf48[_0x5399('0x1d')][_0x5399('0x21')](_0xd5464e);};module[_0x5399('0x48')][_0x5399('0x49')]={'name':'promote'};