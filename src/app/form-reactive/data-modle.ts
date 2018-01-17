export class CityInfo{
	id='';
	cityId='';
	roadId='';
	condition:Condition[];
	province='';
}
export class Condition{
	id=0;
	unimpeded=0;
	amble=0
	congestion=0;
}
export const roads:CityInfo[]=[
	{
		id:'0010',
		cityId:'31001',
		roadId:'31001001',
		condition:[
			{id:1,unimpeded:500,amble:600,congestion:200},
			{id:2,unimpeded:300,amble:100,congestion:800}
		],
		province:''
	},
	{
		id:'0011',
		cityId:'31007',
		roadId:'31007001',
		condition:[
			{id:1,unimpeded:200,amble:700,congestion:100}
		],
		province:''
	},
	{
		id:'0112',
		cityId:'31020',
		roadId:'31020021',
		condition:[ ],
		province:''
	}
];

export const provinces=['江苏','河北','陕西','河南','湖北'];