import assert from 'node:assert/strict';import {parse,align,manual,artifact,examples} from './src/core.js';
const d=parse('Jane works in Paris.\r\n\r\nHello.');
const t=(word,entity,index)=>({word,entity,index,score:.8});
const preds=[[t('Jane','B-PER',1),t('works','O',2),t('in','O',3),t('Paris','B-LOC',4),t('.','O',5)],[t('Hello','O',1),t('.','O',2)]];
const s=align(d,preds,['PER','LOC']);s.reviewed=[true,true];const a=artifact(d,s,'Jane');assert.equal(a.redacted,'[PER] works in [LOC].\r\n\r\nHello.');assert.equal(a.original,d.source);assert.equal(a.metrics.literalBaseline,1);assert.equal(a.metrics.maskedCharacters,9);
const m=manual(d,s,'Hello.');assert.equal(m.entities.length,3);assert.equal(m.reviewed[1],false);assert.equal(artifact(d,m).redacted,'[PER] works in [LOC].\r\n\r\n[MANUAL]');assert.throws(()=>manual(d,m,'Hello.'),/No new/);assert.throws(()=>manual(d,m,''));
for(const bad of[[],[[{}]],[[t('Jane','B-PER',1)]],[[t('Other','B-PER',1)],preds[1]],[[{...preds[0][0],score:NaN}],preds[1]],[[{...preds[0][0],entity:'B-SECRET'}],preds[1]],[[t('[UNK]','O',1)],preds[1]]])assert.throws(()=>align(d,bad,['PER']));
const bad=structuredClone(s);bad.entities[0].original='tampered';assert.throws(()=>artifact(d,bad));bad.entities[0]=structuredClone(s.entities[0]);bad.entities[0].replacement=' ';assert.throws(()=>artifact(d,bad));
for(const x of['', 'a'.repeat(401),Array(13).fill('x').join('\n\n'),'é'.repeat(4001)])assert.throws(()=>parse(x));assert.equal(parse(Array(12).fill('a'.repeat(400)).join('\n\n')).chunks.length,12);
// Exact WordPiece assembly and repeated tokens remain tied to source offsets.
const pd=parse('Joanna met Joanna.');const pr=align(pd,[[t('Jo','B-PER',1),t('##anna','I-PER',2),t('met','O',3),t('Jo','B-PER',4),t('##anna','I-PER',5),t('.','O',6)]],['PER']);assert.deepEqual(pr.entities.map(e=>[e.start,e.end,e.original]),[[0,6,'Joanna'],[11,17,'Joanna']]);assert.equal(artifact(pd,pr).redacted,'[PER] met [PER].');
console.log('PASS: bounded parsing, exact alignment, repeated WordPieces, schema rejection, manual masks, originals/CRLF conservation, deterministic export.');
