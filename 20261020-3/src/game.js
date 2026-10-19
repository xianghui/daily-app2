export const colors = ['jade','rose','gold'];
export const symbols = ['✦','●','◆'];
export function randomGem(){return {color:Math.floor(Math.random()*3),shape:Math.floor(Math.random()*3)}}
export function draft(){return Array.from({length:3},randomGem)}
export function same(a,b){return !!a&&!!b&&a.color===b.color&&a.shape===b.shape}
export function scoreBoard(board){
 let links=0,echoes=0;
 for(let i=0;i<12;i++){
  const a=board[i],b=board[(i+1)%12];
  if(a&&b){if(a.color===b.color)links+=4;if(a.shape===b.shape)links+=2;}
  if(i<6&&same(a,board[i+6]))echoes+=8;
 }
 return {links,echoes,total:links+echoes};
}
export function preview(board,index,gem){const next=[...board];next[index]=gem;return scoreBoard(next).total-scoreBoard(board).total}
export function newGame(){return {board:Array(12).fill(null),offer:draft(),turn:0,previous:null,undoLeft:true}}
export function place(state,index,selected){
 if(state.board[index]||state.turn>=12)return state;
 const board=[...state.board];board[index]=state.offer[selected];
 return {...state,board,offer:draft(),turn:state.turn+1,previous:{board:state.board,offer:state.offer,turn:state.turn}};
}
