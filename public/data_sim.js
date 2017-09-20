function interpolate(data){
	let prev = undefined;
	for(let curr of data){
		for( let k of Object.keys(curr)){
			if(k.indexOf('IM')!==-1){
				if(prev&&prev[k]&&!curr[k]){
					curr[k]=prev[k];				
				}
			}
		}
		prev = curr;
	}
	return data;
}

let sim = {
highlights : [[1710.0, 1754.9], [2110.0, 2154.9]],
schematic:[
{frequency:2127, power:200, t:'tx11'},{frequency:2137, power:200, t:'tx11'},
{frequency:1727, power:180, t:'rx11'},{frequency:1737, power:180, t:'rx11'},
{frequency:2110, power:200, t:'txsim'},{frequency:2120, power:200, t:'txsim'},
{frequency:1710, power:180, t:'rxsim'},{frequency:1720, power:180, t:'rxsim'},
{frequency:2083, power:121, t:'IM3'},{frequency:2113, power:121, t:'IM3'},
{frequency:2056, power:95, t:'IM5'},{frequency:2106, power:95, t:'IM5'},
{frequency:2029, power:69, t:'IM7'},{frequency:2099, power:69, t:'IM7'},
{frequency:2002, power:43, t:'IM9'},{frequency:2092, power:43, t:'IM9'}
],
spectrum:[
{
frequency: 1709.0005,
RX: -244.73312,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.0305,
RX: -244.63199,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.0615,
RX: -244.53152,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.0914,
RX: -244.42964,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.1215,
RX: -244.3283,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.1445,
RX: -244.22821,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.1705,
RX: -244.12772,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.1954,
RX: -244.02692,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.2185,
RX: -243.9229,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.2455,
RX: -243.82025,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.2684,
RX: -243.71701,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.2935,
RX: -243.61583,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.3075,
RX: -243.5131,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.3245,
RX: -243.41031,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.3405,
RX: -243.30833,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.3564,
RX: -243.20084,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.3695,
RX: -243.10083,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.3815,
RX: -242.99959,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.3934,
RX: -242.89932,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4055,
RX: -242.78995,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4144,
RX: -242.68877,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4215,
RX: -242.57771,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4275,
RX: -242.46693,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4315,
RX: -242.30588,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4344,
RX: -241.9566,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4365,
RX: -242.31206,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4375,
RX: -242.44946,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4404,
RX: -242.559,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4445,
RX: -242.65913,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.4604,
RX: -242.76491,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.5305,
RX: -242.66306,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.5525,
RX: -242.56056,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.5745,
RX: -242.46004,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.5955,
RX: -242.35606,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.6145,
RX: -242.25319,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.6324,
RX: -242.14963,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.6484,
RX: -242.04839,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.6644,
RX: -241.94633,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.6804,
RX: -241.84329,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.6935,
RX: -241.73816,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.7085,
RX: -241.63126,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.7225,
RX: -241.5237,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.7355,
RX: -241.42155,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.7474,
RX: -241.31894,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.7595,
RX: -241.21512,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.7705,
RX: -241.11288,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.7815,
RX: -241.00615,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.7925,
RX: -240.90268,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8025,
RX: -240.79437,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8125,
RX: -240.68503,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8215,
RX: -240.58156,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8304,
RX: -240.47443,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8395,
RX: -240.36751,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8475,
RX: -240.2578,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8555,
RX: -240.12517,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8635,
RX: -240.00888,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8705,
RX: -239.90373,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8774,
RX: -239.79022,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8845,
RX: -239.67586,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8905,
RX: -239.57172,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.8965,
RX: -239.465,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9025,
RX: -239.34949,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9084,
RX: -239.23196,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9135,
RX: -239.12494,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9185,
RX: -239.01724,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9235,
RX: -238.90054,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9285,
RX: -238.77846,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9325,
RX: -238.67386,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9365,
RX: -238.5703,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9404,
RX: -238.45776,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9445,
RX: -238.33755,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9485,
RX: -238.20892,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9525,
RX: -238.08034,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9554,
RX: -237.97609,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9585,
RX: -237.86533,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9614,
RX: -237.74179,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9645,
RX: -237.61467,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9675,
RX: -237.47597,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9705,
RX: -237.32744,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9725,
RX: -237.21964,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9745,
RX: -237.10516,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9764,
RX: -236.98302,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9785,
RX: -236.8523,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9805,
RX: -236.70845,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9824,
RX: -236.55168,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9845,
RX: -236.3774,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9865,
RX: -236.18234,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9874,
RX: -236.07303,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9885,
RX: -235.95642,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9895,
RX: -235.8312,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9905,
RX: -235.69199,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9915,
RX: -235.53882,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9924,
RX: -235.36748,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9935,
RX: -235.17157,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9945,
RX: -234.94006,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9955,
RX: -234.66309,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9965,
RX: -234.30272,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9974,
RX: -233.7905,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9985,
RX: -232.84895,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1709.9995,
RX: -1.977932E-11,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1710.1005,
RX: -9.199684E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1710.2015,
RX: -7.7811585E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1710.3025,
RX: -6.9624445E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1710.4034,
RX: -6.4243498E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1710.5045,
RX: -6.0791203E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1710.6055,
RX: -5.9228993E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1710.7064,
RX: -5.4291636E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1710.8065,
RX: -5.077184E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1710.9075,
RX: -4.7782425E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1711.0084,
RX: -4.5361965E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1711.1085,
RX: -4.360689E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1711.2095,
RX: -3.916134E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1711.3104,
RX: -3.6335858E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1711.4105,
RX: -3.3944327E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1711.5115,
RX: -3.1813163E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1711.6124,
RX: -2.9238409E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1711.7125,
RX: -2.576683E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1711.8135,
RX: -2.391532E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1711.9144,
RX: -2.2073456E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1712.0145,
RX: -2.028945E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1712.1155,
RX: -1.7917204E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1712.2164,
RX: -1.6239274E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1712.3165,
RX: -1.4445626E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1712.4175,
RX: -1.3192E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1712.5184,
RX: -1.1938375E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1712.6185,
RX: -1.033759E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1712.7195,
RX: -9.055035E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1712.8204,
RX: -7.762836E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1712.9205,
RX: -7.3963914E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1713.0215,
RX: -6.4417075E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1713.1224,
RX: -5.4195206E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1713.2225,
RX: -4.3298302E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1713.3235,
RX: -3.973029E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1713.4244,
RX: -3.5680115E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1713.5245,
RX: -2.6615437E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1713.6255,
RX: -1.7357894E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1713.7264,
RX: -8.4860816E-14,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1713.8265,
RX: -5.1109355E-14,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1713.9275,
RX: 3.6644444E-14,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1714.0284,
RX: 1.4464912E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1714.1285,
RX: 2.4686782E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1714.2295,
RX: 3.4715788E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1714.3304,
RX: 4.243041E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1714.4305,
RX: 5.47738E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1714.5315,
RX: 6.9431575E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1714.6324,
RX: 8.21607E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1714.7325,
RX: 9.39255E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1714.8335,
RX: 1.0530456E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1714.9344,
RX: 1.2150526E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1715.0345,
RX: 1.3462011E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1715.1355,
RX: 1.5024222E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1715.2365,
RX: 1.6277847E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1715.3375,
RX: 1.7473614E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1715.4385,
RX: 1.8862245E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1715.5394,
RX: 2.0598035E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1715.6395,
RX: 2.202524E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1715.7405,
RX: 2.2835275E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1715.8414,
RX: 2.3838175E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1715.9415,
RX: 2.4995368E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1716.0425,
RX: 2.6596151E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1716.1434,
RX: 2.6924023E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1716.2435,
RX: 2.771477E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1716.3445,
RX: 2.8601954E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1716.4454,
RX: 2.956628E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1716.5455,
RX: 3.0588468E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1716.6465,
RX: 3.0781332E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1716.7474,
RX: 3.1784232E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1716.8475,
RX: 3.2613556E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1716.9485,
RX: 3.3462163E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1717.0494,
RX: 3.4407204E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1717.1495,
RX: 3.5140094E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1717.2505,
RX: 3.5795835E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1717.3514,
RX: 3.7145894E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1717.4515,
RX: 3.845738E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1717.5525,
RX: 3.9846013E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1717.6534,
RX: 4.108035E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1717.7535,
RX: 4.223754E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1717.8545,
RX: 4.4667646E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1717.9554,
RX: 4.6634875E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1718.0555,
RX: 4.856353E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1718.1565,
RX: 5.0492184E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1718.2574,
RX: 5.242084E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1718.3575,
RX: 5.6104574E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1718.4585,
RX: 5.8592536E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1718.5594,
RX: 6.0945498E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1718.6595,
RX: 6.343346E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1718.7605,
RX: 6.621072E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1718.8615,
RX: 7.0376617E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1718.9615,
RX: 7.299959E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1719.0625,
RX: 7.554541E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1719.1635,
RX: 7.868912E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1719.2635,
RX: 8.227642E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1719.3645,
RX: 8.678947E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1719.4655,
RX: 8.983675E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1719.5656,
RX: 9.267187E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1719.6665,
RX: 9.784067E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1719.7675,
RX: 1.04938115E-11,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1719.8676,
RX: 1.1652933E-11,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1719.9685,
RX: 1.4599918E-11,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0005,
RX: -231.61928,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0015,
RX: -232.42938,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0024,
RX: -232.86629,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0035,
RX: -233.16869,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0045,
RX: -233.40367,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0055,
RX: -233.59596,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0065,
RX: -233.75882,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0074,
RX: -233.90121,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0085,
RX: -234.02785,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0095,
RX: -234.14227,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0105,
RX: -234.24712,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0125,
RX: -234.43082,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0145,
RX: -234.59177,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0165,
RX: -234.732,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0186,
RX: -234.85931,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0205,
RX: -234.97581,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0225,
RX: -235.0821,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0255,
RX: -235.22684,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0284,
RX: -235.35677,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0315,
RX: -235.47592,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0345,
RX: -235.58601,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0375,
RX: -235.68863,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0415,
RX: -235.81393,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0455,
RX: -235.92978,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0494,
RX: -236.0366,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0544,
RX: -236.16081,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0594,
RX: -236.27586,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0645,
RX: -236.38353,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0704,
RX: -236.50291,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0765,
RX: -236.61324,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0825,
RX: -236.71445,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0885,
RX: -236.81775,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.0964,
RX: -236.92612,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.1045,
RX: -237.03246,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.1125,
RX: -237.13768,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.1215,
RX: -237.24838,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.1305,
RX: -237.34984,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.1395,
RX: -237.45332,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.1484,
RX: -237.5611,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.1595,
RX: -237.66423,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.1715,
RX: -237.76917,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.1844,
RX: -237.87459,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.1975,
RX: -237.97624,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.2115,
RX: -238.0768,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.2264,
RX: -238.17873,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.2385,
RX: -238.28894,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.2555,
RX: -238.39012,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.2734,
RX: -238.4949,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.2925,
RX: -238.59805,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.3125,
RX: -238.70007,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.3345,
RX: -238.80498,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.3575,
RX: -238.90643,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.3824,
RX: -239.01001,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.4115,
RX: -239.11261,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.4425,
RX: -239.21289,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.4814,
RX: -239.3129,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.5605,
RX: -239.16507,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.5635,
RX: -238.81508,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.5656,
RX: -238.99074,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.5685,
RX: -239.1008,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.5754,
RX: -239.21162,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.5854,
RX: -239.31175,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.5995,
RX: -239.41818,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.6176,
RX: -239.51932,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.6395,
RX: -239.62128,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.6685,
RX: -239.72534,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.6935,
RX: -239.82617,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.7205,
RX: -239.92708,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.7565,
RX: -240.0276,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.7905,
RX: -240.13164,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.8245,
RX: -240.2349,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.8705,
RX: -240.33838,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.9185,
RX: -240.43994,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1720.9725,
RX: -240.5409,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.0315,
RX: -240.64197,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.1265,
RX: -240.43501,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.1274,
RX: -240.54561,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.1285,
RX: -240.66113,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.1315,
RX: -240.77998,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.1445,
RX: -240.88503,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.1705,
RX: -240.9926,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.2104,
RX: -241.09413,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.2455,
RX: -241.19444,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.2985,
RX: -241.29465,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.3416,
RX: -241.39609,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.3615,
RX: -241.50713,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.4615,
RX: -241.57455,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.5334,
RX: -241.67604,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.6025,
RX: -241.77815,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.6855,
RX: -241.88522,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.6915,
RX: -242.06538,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.7825,
RX: -242.17586,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.8724,
RX: -242.27731,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1721.9725,
RX: -242.34041,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.0706,
RX: -242.44052,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.1655,
RX: -242.54218,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.2314,
RX: -242.6444,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.2515,
RX: -242.77158,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.2545,
RX: -242.90503,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.2574,
RX: -242.78668,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.3575,
RX: -242.73547,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.4585,
RX: -242.7404,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.4895,
RX: -242.6384,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.5334,
RX: -242.73915,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.6335,
RX: -242.79555,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.7345,
RX: -242.85617,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.8115,
RX: -242.95633,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.8354,
RX: -242.85477,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1722.9355,
RX: -242.818,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.0365,
RX: -242.79312,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.0535,
RX: -242.69275,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.0594,
RX: -242.79529,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.1595,
RX: -242.8641,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.2605,
RX: -242.88185,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.3615,
RX: -242.89052,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.3835,
RX: -242.75,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.4845,
RX: -242.7992,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.5854,
RX: -242.80397,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.6185,
RX: -242.91531,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.7195,
RX: -242.8829,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.8206,
RX: -242.86871,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.9215,
RX: -242.83041,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.9456,
RX: -242.69397,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1723.9635,
RX: -242.79585,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.0645,
RX: -242.82048,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.1646,
RX: -242.86067,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.1805,
RX: -243.01753,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.1985,
RX: -242.9151,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.2996,
RX: -242.83435,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.4005,
RX: -242.77628,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.5015,
RX: -242.69331,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.6016,
RX: -242.70511,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.7025,
RX: -242.71364,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.7426,
RX: -242.86557,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.7455,
RX: -242.73898,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.7686,
RX: -242.63568,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.8405,
RX: -242.53317,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1724.9344,
RX: -242.43309,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.0325,
RX: -242.33292,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.1335,
RX: -242.26697,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.2175,
RX: -242.1635,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.3085,
RX: -241.91551,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.3685,
RX: -241.81523,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.4415,
RX: -241.71411,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.5125,
RX: -241.61395,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.5745,
RX: -241.51376,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.6515,
RX: -241.4111,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.6935,
RX: -241.31053,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.7485,
RX: -241.2087,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.7815,
RX: -241.0912,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.8275,
RX: -240.98949,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.8535,
RX: -240.88165,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.8665,
RX: -240.76283,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.8705,
RX: -240.65984,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.8715,
RX: -240.54498,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.8726,
RX: -240.4356,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.8735,
RX: -240.61641,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1725.9745,
RX: -240.63307,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.0305,
RX: -240.53293,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.0845,
RX: -240.4327,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.1305,
RX: -240.33238,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.1755,
RX: -240.23183,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.2095,
RX: -240.12611,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.2435,
RX: -240.02301,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.2805,
RX: -239.91925,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.3075,
RX: -239.81856,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.3325,
RX: -239.71701,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.3615,
RX: -239.61171,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.3824,
RX: -239.5116,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.4005,
RX: -239.40877,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.4146,
RX: -239.30707,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.4246,
RX: -239.19624,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.4315,
RX: -239.0476,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.4344,
RX: -238.81035,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.4365,
RX: -239.07492,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.4395,
RX: -239.23224,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.4475,
RX: -239.33359,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.5485,
RX: -239.23729,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.5815,
RX: -239.13583,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.6105,
RX: -239.03348,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.6355,
RX: -238.93234,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.6584,
RX: -238.83072,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.6805,
RX: -238.72874,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.6995,
RX: -238.6285,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.7205,
RX: -238.52205,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.7385,
RX: -238.42053,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.7555,
RX: -238.31859,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.7665,
RX: -238.2123,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.7834,
RX: -238.10515,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.7985,
RX: -237.99776,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.8125,
RX: -237.88995,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.8256,
RX: -237.78487,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.8375,
RX: -237.68073,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.8485,
RX: -237.5781,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.8575,
RX: -237.47665,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.8665,
RX: -237.37514,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.8755,
RX: -237.27109,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.8845,
RX: -237.16241,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.8925,
RX: -237.06163,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9005,
RX: -236.95308,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9075,
RX: -236.8527,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9146,
RX: -236.74855,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9205,
RX: -236.64845,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9265,
RX: -236.5402,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9325,
RX: -236.42381,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9375,
RX: -236.31895,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9425,
RX: -236.20906,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9475,
RX: -236.08838,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9515,
RX: -235.98425,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9556,
RX: -235.87341,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9595,
RX: -235.75385,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9635,
RX: -235.62236,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9666,
RX: -235.51466,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9695,
RX: -235.39818,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9725,
RX: -235.2721,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9755,
RX: -235.13132,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9775,
RX: -235.03009,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9795,
RX: -234.9192,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9814,
RX: -234.79776,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9835,
RX: -234.66403,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9855,
RX: -234.51268,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9875,
RX: -234.34207,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9895,
RX: -234.1423,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9905,
RX: -234.02852,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9915,
RX: -233.90248,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9926,
RX: -233.75937,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9935,
RX: -233.59665,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9945,
RX: -233.4036,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9955,
RX: -233.1684,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9965,
RX: -232.8658,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9976,
RX: -232.42986,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9985,
RX: -231.6188,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1726.9995,
RX: 2.2792844E-11,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1727.1005,
RX: 1.2206457E-11,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1727.2006,
RX: 1.0788896E-11,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1727.3015,
RX: 9.959574E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1727.4025,
RX: 9.386764E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1727.5026,
RX: 9.024176E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1727.6035,
RX: 8.873741E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1727.7045,
RX: 8.349147E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1727.8046,
RX: 7.97306E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1727.9055,
RX: 7.645188E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1728.0065,
RX: 7.373248E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1728.1066,
RX: 7.2015974E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1728.2075,
RX: 6.7155764E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1728.3085,
RX: 6.4224208E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1728.4095,
RX: 6.16591E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1728.5105,
RX: 5.917113E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1728.6115,
RX: 5.6876036E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1728.7115,
RX: 5.2999436E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1728.8125,
RX: 5.1070784E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1728.9135,
RX: 4.9142127E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1729.0135,
RX: 4.71749E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1729.1145,
RX: 4.501481E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1729.2155,
RX: 4.3182584E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1729.3156,
RX: 4.131179E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1729.4165,
RX: 4.023174E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1729.5175,
RX: 3.8958827E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1729.6176,
RX: 3.7628056E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1729.7185,
RX: 3.6355146E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1729.8195,
RX: 3.4831508E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1729.9196,
RX: 3.465793E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1730.0205,
RX: 3.371289E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1730.1215,
RX: 3.2690701E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1730.2216,
RX: 3.1707087E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1730.3225,
RX: 3.101277E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1730.4235,
RX: 3.0897051E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1730.5236,
RX: 2.9855578E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1730.6245,
RX: 2.8891251E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1730.7255,
RX: 2.8023356E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1730.8256,
RX: 2.732904E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1730.9265,
RX: 2.6596151E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1731.0275,
RX: 2.5361813E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1731.1276,
RX: 2.4185333E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1731.2285,
RX: 2.3066713E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1731.3295,
RX: 2.202524E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1731.4296,
RX: 2.0906618E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1731.5305,
RX: 1.9382983E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1731.6315,
RX: 1.7878632E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1731.7316,
RX: 1.6663579E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1731.8325,
RX: 1.5467813E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1731.9335,
RX: 1.3847742E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1732.0336,
RX: 1.2613403E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1732.1345,
RX: 1.0819754E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1732.2355,
RX: 9.797567E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1732.3356,
RX: 8.601801E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1732.4365,
RX: 7.3674617E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1732.5375,
RX: 5.940257E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1732.6376,
RX: 4.243041E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1732.7385,
RX: 3.7415906E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1732.8395,
RX: 2.7965496E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1732.9396,
RX: 1.7165029E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1733.0405,
RX: 3.8573098E-14,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1733.1415,
RX: -2.1215204E-14,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1733.2426,
RX: -6.846725E-14,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1733.3435,
RX: -1.4464912E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1733.4445,
RX: -2.3626023E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1733.5446,
RX: -3.230497E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1733.6455,
RX: -3.5680115E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1733.7465,
RX: -4.4648362E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1733.8466,
RX: -5.082006E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1733.9475,
RX: -6.142766E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1734.0485,
RX: -7.136023E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1734.1486,
RX: -8.013561E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1734.2495,
RX: -8.7175205E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1734.3505,
RX: -9.83614E-13,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1734.4506,
RX: -1.1446567E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1734.5515,
RX: -1.2825556E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1734.6525,
RX: -1.3944176E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1734.7526,
RX: -1.5246017E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1734.8535,
RX: -1.7473614E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1734.9545,
RX: -1.9768714E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1735.0546,
RX: -2.1485216E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1735.1555,
RX: -2.3375297E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1735.2565,
RX: -2.526538E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1735.3566,
RX: -2.8601954E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1735.4575,
RX: -3.1224923E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1735.5585,
RX: -3.3298227E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1735.6586,
RX: -3.5583684E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1735.7595,
RX: -3.822594E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1735.8605,
RX: -4.18711E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1735.9606,
RX: -4.464836E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1736.0615,
RX: -4.7097755E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1736.1625,
RX: -4.97593E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1736.2626,
RX: -5.315373E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1736.3635,
RX: -5.745463E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1736.4645,
RX: -6.033797E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1736.5646,
RX: -6.313452E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1736.6655,
RX: -6.7715074E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1736.7665,
RX: -7.490896E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1736.8666,
RX: -8.634588E-12,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1736.9675,
RX: -1.152082E-11,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0005,
RX: -232.84904,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0015,
RX: -233.78983,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0026,
RX: -234.302,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0035,
RX: -234.6611,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0045,
RX: -234.9399,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0055,
RX: -235.17006,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0065,
RX: -235.36574,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0076,
RX: -235.5379,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0085,
RX: -235.69174,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0095,
RX: -235.83022,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0105,
RX: -235.95613,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0115,
RX: -236.0728,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0126,
RX: -236.18217,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0145,
RX: -236.37575,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0165,
RX: -236.55077,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0186,
RX: -236.70772,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0205,
RX: -236.85039,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0226,
RX: -236.98154,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0245,
RX: -237.10422,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0265,
RX: -237.21896,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0286,
RX: -237.32637,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0305,
RX: -237.42703,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0336,
RX: -237.57129,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0365,
RX: -237.70071,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0396,
RX: -237.82376,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0425,
RX: -237.93889,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0455,
RX: -238.04572,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0496,
RX: -238.17744,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0535,
RX: -238.30586,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0575,
RX: -238.42744,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0615,
RX: -238.54407,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0656,
RX: -238.648,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0696,
RX: -238.75267,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0745,
RX: -238.87592,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0795,
RX: -238.99135,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0845,
RX: -239.10435,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0895,
RX: -239.21019,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.0945,
RX: -239.31076,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1005,
RX: -239.42538,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1066,
RX: -239.5367,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1125,
RX: -239.64134,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1195,
RX: -239.75854,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1265,
RX: -239.87099,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1335,
RX: -239.98,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1405,
RX: -240.08485,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1465,
RX: -240.20258,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1555,
RX: -240.31151,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1636,
RX: -240.41484,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1725,
RX: -240.52303,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1815,
RX: -240.62791,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.1906,
RX: -240.73001,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.2006,
RX: -240.83691,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.2095,
RX: -240.93846,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.2216,
RX: -241.04364,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.2325,
RX: -241.14925,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.2435,
RX: -241.25006,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.2555,
RX: -241.35152,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.2676,
RX: -241.45164,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.2805,
RX: -241.55469,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.2946,
RX: -241.66014,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.3085,
RX: -241.76668,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.3235,
RX: -241.87415,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.3395,
RX: -241.97955,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.3566,
RX: -242.08768,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.3745,
RX: -242.19235,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.3926,
RX: -242.296,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.4125,
RX: -242.3974,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.4335,
RX: -242.50125,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.4565,
RX: -242.60185,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.4845,
RX: -242.7048,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.5575,
RX: -242.58656,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.5605,
RX: -242.45058,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.5625,
RX: -242.31265,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.5635,
RX: -241.94656,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.5656,
RX: -242.22104,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.5685,
RX: -242.38551,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.5735,
RX: -242.52048,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.5806,
RX: -242.62933,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.5885,
RX: -242.73705,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.5995,
RX: -242.85117,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.6125,
RX: -242.95834,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.6245,
RX: -243.0593,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.6376,
RX: -243.16435,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.6525,
RX: -243.26572,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.6686,
RX: -243.3742,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.6855,
RX: -243.47626,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.7025,
RX: -243.58662,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.7235,
RX: -243.69089,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.7476,
RX: -243.7918,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.7705,
RX: -243.89917,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.7986,
RX: -244.0014,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.8225,
RX: -244.10239,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.8485,
RX: -244.20543,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.8735,
RX: -244.30998,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.9025,
RX: -244.41078,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.9325,
RX: -244.51161,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.9615,
RX: -244.61185,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1737.9935,
RX: -244.71544,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.0265,
RX: -244.82268,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.0995,
RX: -244.92268,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1216,
RX: -244.79861,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1265,
RX: -244.50002,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1276,
RX: -244.67773,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1285,
RX: -244.8591,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1295,
RX: -244.9663,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1335,
RX: -245.08472,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1415,
RX: -245.19635,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1525,
RX: -245.30554,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1675,
RX: -245.40749,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1825,
RX: -245.51308,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.1995,
RX: -245.61385,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.2216,
RX: -245.71614,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.2445,
RX: -245.81793,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.2665,
RX: -245.92221,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.3096,
RX: -246.0239,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.3435,
RX: -246.12463,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.3695,
RX: -246.22554,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.3995,
RX: -246.32721,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.4265,
RX: -246.4294,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.4585,
RX: -246.53499,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.4926,
RX: -246.63556,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.5226,
RX: -246.73903,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.5535,
RX: -246.8442,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.5856,
RX: -246.9444,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.6235,
RX: -247.04831,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.6545,
RX: -247.15034,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.6855,
RX: -247.25128,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.6915,
RX: -247.57556,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.7075,
RX: -247.67639,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.7366,
RX: -247.77951,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.7726,
RX: -247.88226,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.8156,
RX: -247.98523,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.8716,
RX: -248.08601,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.9045,
RX: -248.188,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.9335,
RX: -248.28905,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.9635,
RX: -248.38924,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1738.9895,
RX: -248.4896,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.0286,
RX: -248.59076,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.0605,
RX: -248.69223,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.0935,
RX: -248.7969,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.1235,
RX: -248.89804,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.1625,
RX: -248.99821,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.1805,
RX: -249.10274,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.2045,
RX: -249.20619,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.2245,
RX: -249.31253,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.2385,
RX: -249.41872,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.2485,
RX: -249.52332,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.2515,
RX: -249.67078,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.2545,
RX: -249.97119,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.2576,
RX: -249.71796,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.2845,
RX: -249.61382,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.3855,
RX: -249.65366,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.4296,
RX: -249.75783,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.4645,
RX: -249.87274,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.5045,
RX: -249.97653,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.5455,
RX: -250.08011,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.5945,
RX: -250.18117,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.6315,
RX: -250.28215,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.6736,
RX: -250.38287,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.7185,
RX: -250.48346,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.7405,
RX: -250.58696,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.7715,
RX: -250.6885,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.7965,
RX: -250.7895,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.8105,
RX: -250.89491,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.8165,
RX: -251.00809,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.8175,
RX: -251.12946,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.8196,
RX: -250.83116,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.8246,
RX: -250.72743,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.8735,
RX: -250.61542,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.9635,
RX: -250.71817,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1739.9805,
RX: -250.8199,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.0245,
RX: -250.92169,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.0935,
RX: -251.0221,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.1655,
RX: -251.12766,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.2416,
RX: -251.22942,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.2905,
RX: -251.33795,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.3815,
RX: -251.1781,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.3835,
RX: -250.9969,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.3845,
RX: -251.1178,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.4496,
RX: -251.22006,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.4875,
RX: -251.32372,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.5236,
RX: -251.44083,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.5276,
RX: -251.5449,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.6285,
RX: -251.5764,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.7285,
RX: -251.6782,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.8295,
RX: -251.76566,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.9296,
RX: -251.7252,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.9425,
RX: -251.60622,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.9456,
RX: -251.39745,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.9475,
RX: -251.54184,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.9545,
RX: -251.64844,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1740.9735,
RX: -251.75592,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.0016,
RX: -251.8619,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.0255,
RX: -251.96654,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.0646,
RX: -252.06792,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.0875,
RX: -252.17287,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.1885,
RX: -252.19243,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.2555,
RX: -252.29266,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.3566,
RX: -252.3819,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.4575,
RX: -252.45964,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.5055,
RX: -252.3546,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.5105,
RX: -252.49817,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.5126,
RX: -252.62048,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.5386,
RX: -252.72632,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.5635,
RX: -252.83255,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.6035,
RX: -252.93706,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.6505,
RX: -253.0406,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.7516,
RX: -253.05713,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.8085,
RX: -253.17825,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.8805,
RX: -253.28526,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1741.9365,
RX: -253.38594,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.0076,
RX: -253.48985,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.0475,
RX: -253.5918,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.0725,
RX: -253.73338,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.0735,
RX: -253.92352,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.1376,
RX: -254.0261,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.2175,
RX: -253.92267,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.2845,
RX: -254.04407,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.3246,
RX: -254.14671,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.3685,
RX: -254.24933,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.4296,
RX: -254.35413,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.4795,
RX: -254.45427,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.5475,
RX: -254.56477,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.5756,
RX: -254.66495,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.6025,
RX: -254.76964,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.6255,
RX: -254.88072,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.6335,
RX: -255.01184,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.6365,
RX: -255.1922,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.6385,
RX: -255.03113,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.6646,
RX: -254.92497,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.7655,
RX: -254.82625,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.7815,
RX: -254.72195,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.7845,
RX: -254.83337,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.8115,
RX: -254.93471,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.8466,
RX: -255.06097,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.9165,
RX: -255.16238,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1742.9995,
RX: -255.2805,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.0806,
RX: -255.38445,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.1116,
RX: -255.4915,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.1815,
RX: -255.59521,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.1965,
RX: -255.70242,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.2015,
RX: -255.52518,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.2345,
RX: -255.42422,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.2645,
RX: -255.31274,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.3096,
RX: -255.41283,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.3466,
RX: -255.52757,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.3955,
RX: -255.63527,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.4966,
RX: -255.71994,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.5975,
RX: -255.77695,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.6736,
RX: -255.89296,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.7125,
RX: -255.79274,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.7626,
RX: -255.6465,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.7645,
RX: -255.43954,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.7655,
RX: -255.58086,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.8356,
RX: -255.68144,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.8726,
RX: -255.78818,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.9055,
RX: -255.90604,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.9716,
RX: -256.02365,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1743.9816,
RX: -255.91779,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.0825,
RX: -255.97067,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.1836,
RX: -255.9828,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.2845,
RX: -255.95502,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.3215,
RX: -255.84564,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.3265,
RX: -255.72926,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.3275,
RX: -255.61818,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.3296,
RX: -255.78261,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.3375,
RX: -255.88826,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.3655,
RX: -255.98965,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.3926,
RX: -256.11557,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.4315,
RX: -256.2256,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.4666,
RX: -256.32855,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.5365,
RX: -256.2134,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.6376,
RX: -256.30798,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.7385,
RX: -256.35107,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.8395,
RX: -256.39667,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.8905,
RX: -256.24344,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.8915,
RX: -256.36945,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.8926,
RX: -256.51193,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.9115,
RX: -256.6153,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.9396,
RX: -256.71545,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1744.9556,
RX: -256.84103,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.0475,
RX: -256.73898,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.1476,
RX: -256.83066,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.1906,
RX: -256.94864,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.2915,
RX: -257.04166,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.3475,
RX: -257.14413,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.3655,
RX: -257.03384,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.3745,
RX: -257.13916,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.4165,
RX: -257.24567,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.4496,
RX: -257.3504,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.4546,
RX: -257.46674,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.4556,
RX: -257.63562,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.4625,
RX: -257.53442,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.5055,
RX: -257.6365,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.5446,
RX: -257.53412,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.5995,
RX: -257.3992,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.6515,
RX: -257.50742,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.6815,
RX: -257.6101,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.7266,
RX: -257.71307,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.7535,
RX: -257.82565,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.8545,
RX: -257.90192,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.9065,
RX: -258.00504,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.9515,
RX: -258.11096,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1745.9926,
RX: -258.21393,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.0055,
RX: -258.31494,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.0165,
RX: -258.4473,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.0186,
RX: -258.6987,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.0195,
RX: -258.43536,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.0286,
RX: -258.33264,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.0746,
RX: -258.17258,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.1555,
RX: -258.07144,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.1815,
RX: -258.18008,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.2145,
RX: -258.2829,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.2285,
RX: -258.41418,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.3165,
RX: -258.52255,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.3265,
RX: -258.41406,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.3676,
RX: -258.5182,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.4685,
RX: -258.58633,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.4935,
RX: -258.71115,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.5815,
RX: -258.84814,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.5825,
RX: -258.7315,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.5835,
RX: -258.57794,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.6305,
RX: -258.4765,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.6476,
RX: -258.3647,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.6736,
RX: -258.47156,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.7275,
RX: -258.61328,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.7455,
RX: -258.723,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.7896,
RX: -258.84473,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.8395,
RX: -258.73425,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1746.9396,
RX: -258.7471,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.0405,
RX: -258.7173,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.0565,
RX: -258.8845,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.0596,
RX: -258.77576,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.1276,
RX: -258.67535,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.1436,
RX: -258.5716,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.1455,
RX: -258.43527,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.1746,
RX: -258.536,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.2216,
RX: -258.6385,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.2545,
RX: -258.7395,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.2836,
RX: -258.8431,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.2905,
RX: -258.94336,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.3566,
RX: -258.83762,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.4386,
RX: -258.73517,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.5396,
RX: -258.755,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.6405,
RX: -258.7253,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.7015,
RX: -258.62015,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.7085,
RX: -258.48013,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.7125,
RX: -258.582,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.7256,
RX: -258.6827,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.7605,
RX: -258.78824,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.7745,
RX: -258.94897,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.8365,
RX: -259.05304,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.8545,
RX: -259.16486,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.8566,
RX: -259.0478,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.8976,
RX: -258.94717,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.9196,
RX: -258.77112,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1747.9546,
RX: -258.87177,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.0165,
RX: -258.97485,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.1166,
RX: -258.96408,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.1696,
RX: -259.07068,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.1836,
RX: -258.964,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.2745,
RX: -259.24722,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.3185,
RX: -259.35303,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.3285,
RX: -259.4683,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.4186,
RX: -259.33698,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.4775,
RX: -259.2365,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.4816,
RX: -259.13498,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.4895,
RX: -259.2448,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.5265,
RX: -259.35187,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.5715,
RX: -259.46442,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.6725,
RX: -259.55383,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.7256,
RX: -259.66913,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.7466,
RX: -259.55746,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.7555,
RX: -259.66516,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.7955,
RX: -259.7686,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.8265,
RX: -259.86868,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.8365,
RX: -260.054,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.8375,
RX: -260.2046,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.8396,
RX: -260.09918,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.9126,
RX: -259.9978,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.9666,
RX: -259.8975,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1748.9816,
RX: -259.75436,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.0085,
RX: -259.86343,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.0455,
RX: -259.75955,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.0465,
RX: -259.9771,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.0765,
RX: -260.0879,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.1166,
RX: -260.18848,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.1366,
RX: -260.3135,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.1436,
RX: -260.2123,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.2056,
RX: -260.31342,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.2886,
RX: -260.43054,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.3075,
RX: -260.32687,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.3115,
RX: -260.4339,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.3466,
RX: -260.53815,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.3876,
RX: -260.63824,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.3965,
RX: -260.75058,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.3995,
RX: -260.88376,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.4026,
RX: -260.65924,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.4475,
RX: -260.55853,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.4575,
RX: -260.4402,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.5276,
RX: -260.3293,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.5455,
RX: -260.21573,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.5465,
RX: -260.38348,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.5646,
RX: -260.48828,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.5945,
RX: -260.5935,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.6095,
RX: -260.76498,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.7075,
RX: -260.66086,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.7225,
RX: -260.77002,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.8235,
RX: -260.7953,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.8745,
RX: -260.9033,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.9646,
RX: -260.75995,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1749.9656,
RX: -260.62302,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.0166,
RX: -260.52002,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.0286,
RX: -260.38144,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.0305,
RX: -260.49155,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.0565,
RX: -260.60135,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.1075,
RX: -260.71033,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.1106,
RX: -260.84573,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.1676,
RX: -260.9612,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.1725,
RX: -261.1572,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.1755,
RX: -261.0016,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.1825,
RX: -260.88953,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.2505,
RX: -260.78763,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.2635,
RX: -260.64816,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.2765,
RX: -260.76147,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.3766,
RX: -260.6976,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.4375,
RX: -260.8446,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.4406,
RX: -260.73,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.4875,
RX: -260.62888,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.5245,
RX: -260.4713,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.5286,
RX: -260.21634,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.5295,
RX: -260.343,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.5315,
RX: -260.45703,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.5956,
RX: -260.5576,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.6145,
RX: -260.65768,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.6545,
RX: -260.76703,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.6696,
RX: -260.86945,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.6725,
RX: -260.97214,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.6775,
RX: -260.86246,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.7375,
RX: -260.73245,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.7435,
RX: -260.621,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.8256,
RX: -260.50592,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.8365,
RX: -260.61566,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.9375,
RX: -260.50305,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1750.9885,
RX: -260.60483,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.0236,
RX: -260.50388,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.0856,
RX: -260.38892,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.0916,
RX: -260.25076,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.0935,
RX: -260.44437,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.1156,
RX: -260.54468,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.1445,
RX: -260.6497,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.1555,
RX: -260.75305,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.1965,
RX: -260.8559,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.2505,
RX: -260.7544,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.2845,
RX: -260.64972,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.3005,
RX: -260.4442,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.3105,
RX: -260.5455,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.3916,
RX: -260.66852,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.4926,
RX: -260.68927,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.5515,
RX: -260.80045,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.5656,
RX: -260.63586,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.5835,
RX: -260.737,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.6555,
RX: -260.88513,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.6565,
RX: -261.0175,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.7035,
RX: -261.13068,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.7185,
RX: -261.2423,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.7366,
RX: -261.14133,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.7905,
RX: -261.03674,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.8005,
RX: -260.91318,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.8585,
RX: -260.8123,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.8635,
RX: -260.6503,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.8666,
RX: -260.7941,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.8735,
RX: -260.91284,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.9095,
RX: -261.01834,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.9485,
RX: -261.13046,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.9546,
RX: -261.23523,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1751.9685,
RX: -261.13522,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.0446,
RX: -261.23706,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.1075,
RX: -261.35135,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.1276,
RX: -261.25018,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.1385,
RX: -261.35657,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.1796,
RX: -261.46115,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.2125,
RX: -261.57343,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.2185,
RX: -261.76,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.2196,
RX: -261.87027,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.2216,
RX: -261.7357,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.2855,
RX: -261.59586,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.3025,
RX: -261.49557,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.3516,
RX: -261.39484,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.3635,
RX: -261.2477,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.3685,
RX: -261.34888,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.4146,
RX: -261.45734,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.4265,
RX: -261.32538,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.4275,
RX: -261.44073,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.4296,
RX: -261.6808,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.4875,
RX: -261.79187,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.5166,
RX: -261.92395,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.5265,
RX: -261.79977,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.5856,
RX: -261.9022,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.6865,
RX: -261.88275,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.6946,
RX: -262.06042,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.7755,
RX: -262.1852,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.7826,
RX: -262.37457,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.7836,
RX: -262.18277,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.7865,
RX: -262.05472,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.8306,
RX: -261.95007,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.8385,
RX: -261.8154,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.8475,
RX: -261.71066,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.9296,
RX: -261.88162,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.9465,
RX: -261.98257,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.9706,
RX: -262.084,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.9885,
RX: -262.19333,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1752.9916,
RX: -262.42416,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.0005,
RX: -262.26096,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.0825,
RX: -262.09967,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.1836,
RX: -262.16425,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.2395,
RX: -262.06198,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.2566,
RX: -262.22144,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.2726,
RX: -262.11746,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.3466,
RX: -261.88376,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.3905,
RX: -261.78342,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.4015,
RX: -261.67084,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.4176,
RX: -261.77625,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.4406,
RX: -261.87668,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.4885,
RX: -261.9856,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.4926,
RX: -262.11578,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.5066,
RX: -262.2174,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.5505,
RX: -262.32928,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.5555,
RX: -262.49326,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.5565,
RX: -262.35944,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.5586,
RX: -262.1964,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.5605,
RX: -262.08002,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.5985,
RX: -261.97,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.6385,
RX: -261.86813,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.6445,
RX: -261.75748,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.6576,
RX: -261.87708,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.7555,
RX: -261.7742,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.8506,
RX: -261.67297,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.9026,
RX: -261.56387,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.9095,
RX: -261.3278,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.9126,
RX: -261.44836,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.9666,
RX: -261.5795,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1753.9795,
RX: -261.68213,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.0145,
RX: -261.79324,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.0476,
RX: -261.90762,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.0555,
RX: -262.02628,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.0586,
RX: -261.91254,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.0865,
RX: -261.80835,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.1195,
RX: -261.56677,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.1665,
RX: -261.46274,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.2075,
RX: -261.36133,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.2146,
RX: -261.46164,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.3156,
RX: -261.41174,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.3756,
RX: -261.51233,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.3845,
RX: -261.37643,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.4696,
RX: -261.2744,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.4756,
RX: -261.39398,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.5066,
RX: -261.50543,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.5295,
RX: -261.61877,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.5376,
RX: -261.76865,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.6195,
RX: -261.60834,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.6345,
RX: -261.50327,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.6676,
RX: -261.3791,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.6815,
RX: -261.22852,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.6825,
RX: -261.1129,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.6836,
RX: -260.9761,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.6846,
RX: -261.18295,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.6975,
RX: -261.2931,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.7566,
RX: -261.3992,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.7736,
RX: -261.51923,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.8745,
RX: -261.50613,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.9315,
RX: -261.616,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.9465,
RX: -261.49213,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1754.9856,
RX: -261.594,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.0355,
RX: -261.7112,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.0376,
RX: -261.82788,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.0806,
RX: -261.943,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.1006,
RX: -262.08786,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.1056,
RX: -261.96207,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.1185,
RX: -261.86197,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.1595,
RX: -261.7606,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.1805,
RX: -261.6604,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.1836,
RX: -261.5134,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.1896,
RX: -261.61557,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.1915,
RX: -261.5072,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.2435,
RX: -261.39786,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.2456,
RX: -261.24307,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.2476,
RX: -261.43707,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.2506,
RX: -261.56204,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.2566,
RX: -261.67078,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.2886,
RX: -261.77728,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.3285,
RX: -261.88,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.3356,
RX: -261.99942,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.3506,
RX: -261.8982,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.4076,
RX: -262.01044,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.4895,
RX: -262.13782,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.5026,
RX: -262.0331,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.5305,
RX: -262.1333,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.5656,
RX: -262.23938,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.5975,
RX: -262.36017,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.6006,
RX: -262.4919,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.6056,
RX: -262.3721,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.6576,
RX: -262.26962,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.6636,
RX: -262.3747,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.6665,
RX: -262.1496,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.7056,
RX: -262.04483,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.7426,
RX: -261.92758,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.7676,
RX: -262.03424,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.8086,
RX: -262.16962,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.8105,
RX: -262.42682,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.8115,
RX: -262.31168,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.8125,
RX: -262.4358,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.8845,
RX: -262.53738,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.8986,
RX: -262.66318,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1755.9016,
RX: -262.51523,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.0026,
RX: -262.54626,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.1035,
RX: -262.59335,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.1636,
RX: -262.7727,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.1646,
RX: -262.66592,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.1665,
RX: -262.4861,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.2146,
RX: -262.367,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.2285,
RX: -262.16577,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.2595,
RX: -262.2694,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.3105,
RX: -262.42133,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.3265,
RX: -262.54056,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.3575,
RX: -262.6615,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.3706,
RX: -262.79257,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.3735,
RX: -263.1594,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.3756,
RX: -262.99857,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.3805,
RX: -262.8875,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.3866,
RX: -262.77216,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.4196,
RX: -262.6669,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.4635,
RX: -262.49554,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.5636,
RX: -262.44202,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.6166,
RX: -262.33047,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.6385,
RX: -262.47415,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.6426,
RX: -262.37234,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.6886,
RX: -262.26865,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.7256,
RX: -262.15164,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.7285,
RX: -262.0122,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.7776,
RX: -261.90543,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.7915,
RX: -261.80115,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.7936,
RX: -261.92468,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.8046,
RX: -262.03165,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.8335,
RX: -262.1376,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.8656,
RX: -262.25372,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.8735,
RX: -262.4119,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.9336,
RX: -262.52914,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.9365,
RX: -262.74173,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.9375,
RX: -262.57486,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.9386,
RX: -262.31653,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.9415,
RX: -262.20016,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.9565,
RX: -262.08704,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1756.9825,
RX: -261.97195,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.0166,
RX: -261.86243,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.0276,
RX: -261.6811,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.0295,
RX: -261.81265,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.1306,
RX: -261.75784,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.1796,
RX: -261.65607,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.2495,
RX: -261.54355,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.2865,
RX: -261.4302,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.2915,
RX: -261.30566,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.2936,
RX: -261.42194,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.3485,
RX: -261.5508,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.3595,
RX: -261.66586,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.4236,
RX: -261.76962,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.4365,
RX: -261.88388,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.4386,
RX: -261.77768,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.4546,
RX: -261.67764,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.4796,
RX: -261.573,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.5006,
RX: -261.37592,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.5016,
RX: -261.10864,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.5135,
RX: -261.22256,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.5875,
RX: -261.11902,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.5946,
RX: -261.21902,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.6956,
RX: -261.14966,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.7965,
RX: -261.11258,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1757.8575,
RX: -261.21713,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1816.3,
RX: undefined,
IM3: -302.95584,
IM5: -372.48856,
IM7: -442.42053,
IM9: -512.1645
},
{
frequency: 1816.8,
RX: undefined,
IM3: -302.96713,
IM5: -372.49637,
IM7: -442.42462,
IM9: -512.166
},
{
frequency: 1817.3,
RX: undefined,
IM3: -303.0028,
IM5: -372.51956,
IM7: -442.43643,
IM9: -512.172
},
{
frequency: 1817.8,
RX: undefined,
IM3: -303.067,
IM5: -372.55884,
IM7: -442.45496,
IM9: -512.1805
},
{
frequency: 1818.3,
RX: undefined,
IM3: -303.16754,
IM5: -372.61398,
IM7: -442.48114,
IM9: -512.1931
},
{
frequency: 1818.8,
RX: undefined,
IM3: -303.31155,
IM5: -372.68356,
IM7: -442.51437,
IM9: -512.20905
},
{
frequency: 1819.3,
RX: undefined,
IM3: -303.49423,
IM5: -372.7677,
IM7: -442.5545,
IM9: -512.22815
},
{
frequency: 1819.8,
RX: undefined,
IM3: -303.69403,
IM5: -372.8653,
IM7: -442.60083,
IM9: -512.2499
},
{
frequency: 1820.3,
RX: undefined,
IM3: -303.91315,
IM5: -372.97614,
IM7: -442.6528,
IM9: -512.2743
},
{
frequency: 1820.8,
RX: undefined,
IM3: -304.15558,
IM5: -373.0988,
IM7: -442.71033,
IM9: -512.3017
},
{
frequency: 1821.3,
RX: undefined,
IM3: -304.42056,
IM5: -373.23267,
IM7: -442.77148,
IM9: -512.3309
},
{
frequency: 1821.8,
RX: undefined,
IM3: -304.70248,
IM5: -373.37524,
IM7: -442.83737,
IM9: -512.3625
},
{
frequency: 1822.3,
RX: undefined,
IM3: -305.00262,
IM5: -373.5269,
IM7: -442.9059,
IM9: -512.39453
},
{
frequency: 1822.8,
RX: undefined,
IM3: -305.32675,
IM5: -373.68573,
IM7: -442.97693,
IM9: -512.42883
},
{
frequency: 1823.3,
RX: undefined,
IM3: -305.67853,
IM5: -373.84958,
IM7: -443.04907,
IM9: -512.46375
},
{
frequency: 1823.8,
RX: undefined,
IM3: -306.0716,
IM5: -374.01617,
IM7: -443.12198,
IM9: -512.4987
},
{
frequency: 1824.3,
RX: undefined,
IM3: -306.5091,
IM5: -374.18405,
IM7: -443.19418,
IM9: -512.53455
},
{
frequency: 1824.8,
RX: undefined,
IM3: -306.95517,
IM5: -374.34952,
IM7: -443.26526,
IM9: -512.57007
},
{
frequency: 1825.3,
RX: undefined,
IM3: -307.3957,
IM5: -374.51007,
IM7: -443.33423,
IM9: -512.605
},
{
frequency: 1825.8,
RX: undefined,
IM3: -307.8215,
IM5: -374.66293,
IM7: -443.4,
IM9: -512.6387
},
{
frequency: 1826.3,
RX: undefined,
IM3: -308.22827,
IM5: -374.8052,
IM7: -443.46112,
IM9: -512.6722
},
{
frequency: 1826.8,
RX: undefined,
IM3: -308.6116,
IM5: -374.9346,
IM7: -443.519,
IM9: -512.7041
},
{
frequency: 1827.3,
RX: undefined,
IM3: -308.95947,
IM5: -375.0487,
IM7: -443.57132,
IM9: -512.7354
},
{
frequency: 1827.8,
RX: undefined,
IM3: -309.25653,
IM5: -375.14597,
IM7: -443.6182,
IM9: -512.76434
},
{
frequency: 1828.3,
RX: undefined,
IM3: -309.475,
IM5: -375.22357,
IM7: -443.659,
IM9: -512.7921
},
{
frequency: 1828.8,
RX: undefined,
IM3: -309.58948,
IM5: -375.28143,
IM7: -443.69406,
IM9: -512.8184
},
{
frequency: 1829.3,
RX: undefined,
IM3: -309.58685,
IM5: -375.31915,
IM7: -443.72308,
IM9: -512.8435
},
{
frequency: 1829.8,
RX: undefined,
IM3: -309.4837,
IM5: -375.33627,
IM7: -443.74585,
IM9: -512.86646
},
{
frequency: 1830.3,
RX: undefined,
IM3: -309.2917,
IM5: -375.33438,
IM7: -443.7633,
IM9: -512.88837
},
{
frequency: 1830.8,
RX: undefined,
IM3: -309.01196,
IM5: -375.315,
IM7: -443.7756,
IM9: -512.90906
},
{
frequency: 1831.3,
RX: undefined,
IM3: -308.6728,
IM5: -375.27988,
IM7: -443.7835,
IM9: -512.92883
},
{
frequency: 1831.8,
RX: undefined,
IM3: -308.33502,
IM5: -375.23138,
IM7: -443.78708,
IM9: -512.9477
},
{
frequency: 1832.3,
RX: undefined,
IM3: -308.0104,
IM5: -375.17258,
IM7: -443.78757,
IM9: -512.9662
},
{
frequency: 1832.8,
RX: undefined,
IM3: -307.70065,
IM5: -375.1059,
IM7: -443.78525,
IM9: -512.9843
},
{
frequency: 1833.3,
RX: undefined,
IM3: -307.4017,
IM5: -375.0328,
IM7: -443.7815,
IM9: -513.0022
},
{
frequency: 1833.8,
RX: undefined,
IM3: -307.10858,
IM5: -374.9563,
IM7: -443.77713,
IM9: -513.0213
},
{
frequency: 1834.3,
RX: undefined,
IM3: -306.8222,
IM5: -374.87836,
IM7: -443.77298,
IM9: -513.0407
},
{
frequency: 1834.8,
RX: undefined,
IM3: -306.5547,
IM5: -374.80237,
IM7: -443.76877,
IM9: -513.061
},
{
frequency: 1835.3,
RX: undefined,
IM3: -306.3099,
IM5: -374.72845,
IM7: -443.76694,
IM9: -513.0832
},
{
frequency: 1835.8,
RX: undefined,
IM3: -306.08472,
IM5: -374.65936,
IM7: -443.767,
IM9: -513.1066
},
{
frequency: 1836.3,
RX: undefined,
IM3: -305.87717,
IM5: -374.596,
IM7: -443.77023,
IM9: -513.132
},
{
frequency: 1836.8,
RX: undefined,
IM3: -305.68204,
IM5: -374.53937,
IM7: -443.77707,
IM9: -513.1597
},
{
frequency: 1837.3,
RX: undefined,
IM3: -305.49777,
IM5: -374.49054,
IM7: -443.7882,
IM9: -513.1902
},
{
frequency: 1837.8,
RX: undefined,
IM3: -305.3207,
IM5: -374.45056,
IM7: -443.80466,
IM9: -513.22327
},
{
frequency: 1838.3,
RX: undefined,
IM3: -305.1515,
IM5: -374.41946,
IM7: -443.82614,
IM9: -513.25903
},
{
frequency: 1838.8,
RX: undefined,
IM3: -305.00192,
IM5: -374.39886,
IM7: -443.85315,
IM9: -513.29846
},
{
frequency: 1839.3,
RX: undefined,
IM3: -304.8769,
IM5: -374.38904,
IM7: -443.88654,
IM9: -513.3407
},
{
frequency: 1839.8,
RX: undefined,
IM3: -304.77792,
IM5: -374.3898,
IM7: -443.92627,
IM9: -513.38654
},
{
frequency: 1840.3,
RX: undefined,
IM3: -304.70496,
IM5: -374.4026,
IM7: -443.97244,
IM9: -513.43585
},
{
frequency: 1840.8,
RX: undefined,
IM3: -304.66318,
IM5: -374.4279,
IM7: -444.02545,
IM9: -513.4882
},
{
frequency: 1841.3,
RX: undefined,
IM3: -304.66626,
IM5: -374.46487,
IM7: -444.08533,
IM9: -513.5446
},
{
frequency: 1841.8,
RX: undefined,
IM3: -304.68887,
IM5: -374.5138,
IM7: -444.15195,
IM9: -513.6042
},
{
frequency: 1842.3,
RX: undefined,
IM3: -304.71982,
IM5: -374.57477,
IM7: -444.22525,
IM9: -513.66693
},
{
frequency: 1842.8,
RX: undefined,
IM3: -304.75693,
IM5: -374.64795,
IM7: -444.3058,
IM9: -513.7335
},
{
frequency: 1843.3,
RX: undefined,
IM3: -304.79926,
IM5: -374.73285,
IM7: -444.39288,
IM9: -513.80316
},
{
frequency: 1843.8,
RX: undefined,
IM3: -304.84543,
IM5: -374.8288,
IM7: -444.48682,
IM9: -513.87616
},
{
frequency: 1844.3,
RX: undefined,
IM3: -304.8986,
IM5: -374.9373,
IM7: -444.5869,
IM9: -513.95135
},
{
frequency: 1844.8,
RX: undefined,
IM3: -304.95444,
IM5: -375.056,
IM7: -444.69278,
IM9: -514.0295
},
{
frequency: 1845.3,
RX: undefined,
IM3: -305.01608,
IM5: -375.18777,
IM7: -444.8049,
IM9: -514.1097
},
{
frequency: 1845.8,
RX: undefined,
IM3: -305.08286,
IM5: -375.33032,
IM7: -444.9219,
IM9: -514.19257
},
{
frequency: 1846.3,
RX: undefined,
IM3: -305.1566,
IM5: -375.4842,
IM7: -445.0438,
IM9: -514.27734
},
{
frequency: 1846.8,
RX: undefined,
IM3: -305.2416,
IM5: -375.64944,
IM7: -445.1706,
IM9: -514.3635
},
{
frequency: 1847.3,
RX: undefined,
IM3: -305.33908,
IM5: -375.82584,
IM7: -445.30145,
IM9: -514.4511
},
{
frequency: 1847.8,
RX: undefined,
IM3: -305.4566,
IM5: -376.0136,
IM7: -445.4348,
IM9: -514.54
},
{
frequency: 1848.3,
RX: undefined,
IM3: -305.6226,
IM5: -376.21274,
IM7: -445.5715,
IM9: -514.6289
},
{
frequency: 1848.8,
RX: undefined,
IM3: -305.83032,
IM5: -376.42273,
IM7: -445.7098,
IM9: -514.71814
},
{
frequency: 1849.3,
RX: undefined,
IM3: -306.06662,
IM5: -376.64218,
IM7: -445.84985,
IM9: -514.808
},
{
frequency: 1849.8,
RX: undefined,
IM3: -306.32712,
IM5: -376.87015,
IM7: -445.9902,
IM9: -514.8975
},
{
frequency: 1850.3,
RX: undefined,
IM3: -306.60605,
IM5: -377.107,
IM7: -446.13004,
IM9: -514.9867
},
{
frequency: 1850.8,
RX: undefined,
IM3: -306.90494,
IM5: -377.35022,
IM7: -446.26978,
IM9: -515.07434
},
{
frequency: 1851.3,
RX: undefined,
IM3: -307.21295,
IM5: -377.59717,
IM7: -446.40652,
IM9: -515.16144
},
{
frequency: 1851.8,
RX: undefined,
IM3: -307.53433,
IM5: -377.8495,
IM7: -446.54178,
IM9: -515.24774
},
{
frequency: 1852.3,
RX: undefined,
IM3: -307.87164,
IM5: -378.1026,
IM7: -446.67368,
IM9: -515.33295
},
{
frequency: 1852.8,
RX: undefined,
IM3: -308.2305,
IM5: -378.35632,
IM7: -446.80176,
IM9: -515.416
},
{
frequency: 1853.3,
RX: undefined,
IM3: -308.6119,
IM5: -378.60748,
IM7: -446.925,
IM9: -515.49884
},
{
frequency: 1853.8,
RX: undefined,
IM3: -309.02002,
IM5: -378.8545,
IM7: -447.04422,
IM9: -515.57935
},
{
frequency: 1854.3,
RX: undefined,
IM3: -309.45334,
IM5: -379.0952,
IM7: -447.1569,
IM9: -515.6588
},
{
frequency: 1854.8,
RX: undefined,
IM3: -309.92493,
IM5: -379.3253,
IM7: -447.26532,
IM9: -515.73676
},
{
frequency: 1855.3,
RX: undefined,
IM3: -310.4249,
IM5: -379.54434,
IM7: -447.36807,
IM9: -515.81396
},
{
frequency: 1855.779,
RX: undefined,
IM3: -310.92618,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1855.8,
RX: undefined,
IM3: undefined,
IM5: -379.74954,
IM7: -447.4655,
IM9: -515.8898
},
{
frequency: 1856.2311,
RX: undefined,
IM3: -311.42773,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1856.3,
RX: undefined,
IM3: undefined,
IM5: -379.93887,
IM7: -447.55783,
IM9: -515.9644
},
{
frequency: 1856.659,
RX: undefined,
IM3: -311.92923,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1856.8,
RX: undefined,
IM3: undefined,
IM5: -380.10828,
IM7: -447.6446,
IM9: -516.0394
},
{
frequency: 1857.0641,
RX: undefined,
IM3: -312.42972,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1857.3,
RX: undefined,
IM3: undefined,
IM5: -380.25797,
IM7: -447.72696,
IM9: -516.11365
},
{
frequency: 1857.447,
RX: undefined,
IM3: -312.93143,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1857.8,
RX: undefined,
IM3: undefined,
IM5: -380.38904,
IM7: -447.80634,
IM9: -516.18835
},
{
frequency: 1857.8041,
RX: undefined,
IM3: -313.43402,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1858.1671,
RX: undefined,
IM3: -313.9352,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1858.3,
RX: undefined,
IM3: undefined,
IM5: -380.4982,
IM7: -447.88235,
IM9: -516.2633
},
{
frequency: 1858.5631,
RX: undefined,
IM3: -314.43536,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1858.8,
RX: undefined,
IM3: undefined,
IM5: -380.58817,
IM7: -447.95508,
IM9: -516.3384
},
{
frequency: 1859.0211,
RX: undefined,
IM3: -314.93594,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1859.3,
RX: undefined,
IM3: undefined,
IM5: -380.65973,
IM7: -448.02798,
IM9: -516.4153
},
{
frequency: 1859.5211,
RX: undefined,
IM3: -315.3776,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1859.8,
RX: undefined,
IM3: undefined,
IM5: -380.7149,
IM7: -448.0988,
IM9: -516.4938
},
{
frequency: 1860.0211,
RX: undefined,
IM3: -315.70706,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1860.3,
RX: undefined,
IM3: undefined,
IM5: -380.75858,
IM7: -448.1712,
IM9: -516.57306
},
{
frequency: 1860.5211,
RX: undefined,
IM3: -315.94205,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1860.8,
RX: undefined,
IM3: undefined,
IM5: -380.79053,
IM7: -448.24335,
IM9: -516.65466
},
{
frequency: 1861.0211,
RX: undefined,
IM3: -316.07904,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1861.3,
RX: undefined,
IM3: undefined,
IM5: -380.8159,
IM7: -448.31857,
IM9: -516.739
},
{
frequency: 1861.5211,
RX: undefined,
IM3: -316.10822,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1861.8,
RX: undefined,
IM3: undefined,
IM5: -380.83603,
IM7: -448.39743,
IM9: -516.8261
},
{
frequency: 1862.0211,
RX: undefined,
IM3: -316.02,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1862.3,
RX: undefined,
IM3: undefined,
IM5: -380.85522,
IM7: -448.4799,
IM9: -516.9156
},
{
frequency: 1862.5211,
RX: undefined,
IM3: -315.82748,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1862.8,
RX: undefined,
IM3: undefined,
IM5: -380.87692,
IM7: -448.56744,
IM9: -517.00824
},
{
frequency: 1863.0211,
RX: undefined,
IM3: -315.55246,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1863.3,
RX: undefined,
IM3: undefined,
IM5: -380.9022,
IM7: -448.65985,
IM9: -517.10455
},
{
frequency: 1863.5211,
RX: undefined,
IM3: -315.23068,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1863.8,
RX: undefined,
IM3: undefined,
IM5: -380.9349,
IM7: -448.75916,
IM9: -517.2043
},
{
frequency: 1864.0211,
RX: undefined,
IM3: -314.8835,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1864.3,
RX: undefined,
IM3: undefined,
IM5: -380.97733,
IM7: -448.8667,
IM9: -517.30756
},
{
frequency: 1864.5211,
RX: undefined,
IM3: -314.52466,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1864.8,
RX: undefined,
IM3: undefined,
IM5: -381.03192,
IM7: -448.98077,
IM9: -517.4149
},
{
frequency: 1865.0211,
RX: undefined,
IM3: -314.16583,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1865.3,
RX: undefined,
IM3: undefined,
IM5: -381.1021,
IM7: -449.10175,
IM9: -517.5257
},
{
frequency: 1865.5211,
RX: undefined,
IM3: -313.8988,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1865.8,
RX: undefined,
IM3: undefined,
IM5: -381.1879,
IM7: -449.23254,
IM9: -517.64056
},
{
frequency: 1866.0211,
RX: undefined,
IM3: -313.7063,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1866.3,
RX: undefined,
IM3: undefined,
IM5: -381.29227,
IM7: -449.3731,
IM9: -517.7594
},
{
frequency: 1866.5211,
RX: undefined,
IM3: -313.57278,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1866.8,
RX: undefined,
IM3: undefined,
IM5: -381.41574,
IM7: -449.5212,
IM9: -517.8822
},
{
frequency: 1867.0211,
RX: undefined,
IM3: -313.47964,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1867.3,
RX: undefined,
IM3: undefined,
IM5: -381.55832,
IM7: -449.67838,
IM9: -518.0076
},
{
frequency: 1867.5211,
RX: undefined,
IM3: -313.4203,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1867.8,
RX: undefined,
IM3: undefined,
IM5: -381.7234,
IM7: -449.84552,
IM9: -518.1368
},
{
frequency: 1868.0211,
RX: undefined,
IM3: -313.3818,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1868.3,
RX: undefined,
IM3: undefined,
IM5: -381.90814,
IM7: -450.02188,
IM9: -518.2687
},
{
frequency: 1868.5211,
RX: undefined,
IM3: -313.38797,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1868.8,
RX: undefined,
IM3: undefined,
IM5: -382.11588,
IM7: -450.2075,
IM9: -518.4044
},
{
frequency: 1869.0211,
RX: undefined,
IM3: -313.43692,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1869.3,
RX: undefined,
IM3: undefined,
IM5: -382.34506,
IM7: -450.40097,
IM9: -518.5419
},
{
frequency: 1869.5211,
RX: undefined,
IM3: -313.5251,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1869.8,
RX: undefined,
IM3: undefined,
IM5: -382.5978,
IM7: -450.6018,
IM9: -518.6822
},
{
frequency: 1870.0211,
RX: undefined,
IM3: -313.65286,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1870.3,
RX: undefined,
IM3: undefined,
IM5: -382.8741,
IM7: -450.81177,
IM9: -518.82404
},
{
frequency: 1870.5211,
RX: undefined,
IM3: -313.79,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1870.8,
RX: undefined,
IM3: undefined,
IM5: -383.1752,
IM7: -451.02875,
IM9: -518.9674
},
{
frequency: 1871.0211,
RX: undefined,
IM3: -313.92053,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1871.3,
RX: undefined,
IM3: undefined,
IM5: -383.49924,
IM7: -451.24976,
IM9: -519.1115
},
{
frequency: 1871.5211,
RX: undefined,
IM3: -314.0502,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1871.8,
RX: undefined,
IM3: undefined,
IM5: -383.85095,
IM7: -451.4788,
IM9: -519.2561
},
{
frequency: 1872.0211,
RX: undefined,
IM3: -314.18906,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1872.3,
RX: undefined,
IM3: undefined,
IM5: -384.22797,
IM7: -451.71036,
IM9: -519.401
},
{
frequency: 1872.5211,
RX: undefined,
IM3: -314.3538,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1872.8,
RX: undefined,
IM3: undefined,
IM5: -384.62683,
IM7: -451.9435,
IM9: -519.54565
},
{
frequency: 1873.0211,
RX: undefined,
IM3: -314.55164,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1873.3,
RX: undefined,
IM3: undefined,
IM5: -385.05536,
IM7: -452.17908,
IM9: -519.6897
},
{
frequency: 1873.5211,
RX: undefined,
IM3: -314.78766,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1873.8,
RX: undefined,
IM3: undefined,
IM5: -385.50824,
IM7: -452.41486,
IM9: -519.8318
},
{
frequency: 1874.0211,
RX: undefined,
IM3: -315.06168,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1874.3,
RX: undefined,
IM3: undefined,
IM5: -385.98807,
IM7: -452.64896,
IM9: -519.9728
},
{
frequency: 1874.5211,
RX: undefined,
IM3: -315.37805,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1874.7981,
RX: undefined,
IM3: undefined,
IM5: -386.4901,
IM7: undefined,
IM9: undefined
},
{
frequency: 1874.8,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -452.87964,
IM9: -520.11206
},
{
frequency: 1875.0211,
RX: undefined,
IM3: -315.78854,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1875.2781,
RX: undefined,
IM3: undefined,
IM5: -386.99088,
IM7: undefined,
IM9: undefined
},
{
frequency: 1875.3,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -453.10635,
IM9: -520.24976
},
{
frequency: 1875.5211,
RX: undefined,
IM3: -316.27405,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1875.743,
RX: undefined,
IM3: undefined,
IM5: -387.4911,
IM7: undefined,
IM9: undefined
},
{
frequency: 1875.8,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -453.32687,
IM9: -520.3853
},
{
frequency: 1876.0171,
RX: undefined,
IM3: -316.77435,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1876.1971,
RX: undefined,
IM3: undefined,
IM5: -387.9931,
IM7: undefined,
IM9: undefined
},
{
frequency: 1876.3,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -453.5397,
IM9: -520.5174
},
{
frequency: 1876.5111,
RX: undefined,
IM3: -317.2754,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1876.6461,
RX: undefined,
IM3: undefined,
IM5: -388.49567,
IM7: undefined,
IM9: undefined
},
{
frequency: 1876.8,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -453.744,
IM9: -520.6474
},
{
frequency: 1877.0111,
RX: undefined,
IM3: -317.7699,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1877.0951,
RX: undefined,
IM3: undefined,
IM5: -388.99612,
IM7: undefined,
IM9: undefined
},
{
frequency: 1877.3,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -453.93784,
IM9: -520.7759
},
{
frequency: 1877.5111,
RX: undefined,
IM3: -318.24457,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1877.545,
RX: undefined,
IM3: undefined,
IM5: -389.49786,
IM7: undefined,
IM9: undefined
},
{
frequency: 1877.8,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -454.12268,
IM9: -520.9016
},
{
frequency: 1878.0021,
RX: undefined,
IM3: undefined,
IM5: -389.99924,
IM7: undefined,
IM9: undefined
},
{
frequency: 1878.0111,
RX: undefined,
IM3: -318.7081,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1878.3,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -454.29794,
IM9: -521.0255
},
{
frequency: 1878.4701,
RX: undefined,
IM3: undefined,
IM5: -390.49982,
IM7: undefined,
IM9: undefined
},
{
frequency: 1878.5111,
RX: undefined,
IM3: -319.1454,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1878.8,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -454.464,
IM9: -521.14685
},
{
frequency: 1878.9701,
RX: undefined,
IM3: undefined,
IM5: -391.0041,
IM7: undefined,
IM9: undefined
},
{
frequency: 1879.0111,
RX: undefined,
IM3: -319.55627,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1879.3,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -454.6174,
IM9: -521.2682
},
{
frequency: 1879.4701,
RX: undefined,
IM3: undefined,
IM5: -391.47473,
IM7: undefined,
IM9: undefined
},
{
frequency: 1879.5111,
RX: undefined,
IM3: -319.94556,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1879.8,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -454.76474,
IM9: -521.38776
},
{
frequency: 1879.9701,
RX: undefined,
IM3: undefined,
IM5: -391.91058,
IM7: undefined,
IM9: undefined
},
{
frequency: 1880.0111,
RX: undefined,
IM3: -320.27103,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1880.3,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -454.9035,
IM9: -521.5046
},
{
frequency: 1880.4701,
RX: undefined,
IM3: undefined,
IM5: -392.30457,
IM7: undefined,
IM9: undefined
},
{
frequency: 1880.5111,
RX: undefined,
IM3: -320.50848,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1880.8,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -455.0376,
IM9: -521.6234
},
{
frequency: 1880.9701,
RX: undefined,
IM3: undefined,
IM5: -392.6496,
IM7: undefined,
IM9: undefined
},
{
frequency: 1881.0111,
RX: undefined,
IM3: -320.69568,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1881.3,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -455.16428,
IM9: -521.7423
},
{
frequency: 1881.4701,
RX: undefined,
IM3: undefined,
IM5: -392.95053,
IM7: undefined,
IM9: undefined
},
{
frequency: 1881.5111,
RX: undefined,
IM3: -320.8538,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1881.8,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -455.2889,
IM9: -521.86273
},
{
frequency: 1881.9701,
RX: undefined,
IM3: undefined,
IM5: -393.20316,
IM7: undefined,
IM9: undefined
},
{
frequency: 1882.0111,
RX: undefined,
IM3: -320.99823,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1882.3,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -455.41245,
IM9: -521.9818
},
{
frequency: 1882.4701,
RX: undefined,
IM3: undefined,
IM5: -393.42606,
IM7: undefined,
IM9: undefined
},
{
frequency: 1882.5111,
RX: undefined,
IM3: -321.1405,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1882.8,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -455.53418,
IM9: -522.10376
},
{
frequency: 1882.9701,
RX: undefined,
IM3: undefined,
IM5: -393.62042,
IM7: undefined,
IM9: undefined
},
{
frequency: 1883.0111,
RX: undefined,
IM3: -321.2641,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1883.3,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -455.6579,
IM9: -522.2284
},
{
frequency: 1883.4701,
RX: undefined,
IM3: undefined,
IM5: -393.78696,
IM7: undefined,
IM9: undefined
},
{
frequency: 1883.5111,
RX: undefined,
IM3: -321.3532,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1883.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -455.78522,
IM9: -522.3555
},
{
frequency: 1883.9701,
RX: undefined,
IM3: undefined,
IM5: -393.96255,
IM7: undefined,
IM9: undefined
},
{
frequency: 1884.0111,
RX: undefined,
IM3: -321.39288,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1884.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -455.91452,
IM9: -522.4835
},
{
frequency: 1884.4701,
RX: undefined,
IM3: undefined,
IM5: -394.11633,
IM7: undefined,
IM9: undefined
},
{
frequency: 1884.5111,
RX: undefined,
IM3: -321.388,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1884.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -456.05252,
IM9: -522.6169
},
{
frequency: 1884.9701,
RX: undefined,
IM3: undefined,
IM5: -394.29117,
IM7: undefined,
IM9: undefined
},
{
frequency: 1885.0111,
RX: undefined,
IM3: -321.34467,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1885.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -456.19858,
IM9: -522.7527
},
{
frequency: 1885.4701,
RX: undefined,
IM3: undefined,
IM5: -394.46683,
IM7: undefined,
IM9: undefined
},
{
frequency: 1885.5111,
RX: undefined,
IM3: -321.21924,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1885.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -456.3492,
IM9: -522.89136
},
{
frequency: 1885.9701,
RX: undefined,
IM3: undefined,
IM5: -394.67215,
IM7: undefined,
IM9: undefined
},
{
frequency: 1886.0111,
RX: undefined,
IM3: -321.03433,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1886.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -456.50873,
IM9: -523.03595
},
{
frequency: 1886.4701,
RX: undefined,
IM3: undefined,
IM5: -394.89163,
IM7: undefined,
IM9: undefined
},
{
frequency: 1886.5111,
RX: undefined,
IM3: -320.80637,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1886.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -456.68088,
IM9: -523.18115
},
{
frequency: 1886.9701,
RX: undefined,
IM3: undefined,
IM5: -395.1365,
IM7: undefined,
IM9: undefined
},
{
frequency: 1887.0111,
RX: undefined,
IM3: -320.5233,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1887.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -456.859,
IM9: -523.3307
},
{
frequency: 1887.4701,
RX: undefined,
IM3: undefined,
IM5: -395.4119,
IM7: undefined,
IM9: undefined
},
{
frequency: 1887.5111,
RX: undefined,
IM3: -320.2531,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1887.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -457.04196,
IM9: -523.4839
},
{
frequency: 1887.9701,
RX: undefined,
IM3: undefined,
IM5: -395.68744,
IM7: undefined,
IM9: undefined
},
{
frequency: 1888.0111,
RX: undefined,
IM3: -320.0095,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1888.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -457.23877,
IM9: -523.6423
},
{
frequency: 1888.4701,
RX: undefined,
IM3: undefined,
IM5: -395.98737,
IM7: undefined,
IM9: undefined
},
{
frequency: 1888.5111,
RX: undefined,
IM3: -319.76648,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1888.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -457.4429,
IM9: -523.8008
},
{
frequency: 1888.9701,
RX: undefined,
IM3: undefined,
IM5: -396.29395,
IM7: undefined,
IM9: undefined
},
{
frequency: 1889.0111,
RX: undefined,
IM3: -319.52335,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1889.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -457.6533,
IM9: -523.9631
},
{
frequency: 1889.4701,
RX: undefined,
IM3: undefined,
IM5: -396.58456,
IM7: undefined,
IM9: undefined
},
{
frequency: 1889.5111,
RX: undefined,
IM3: -319.27762,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1889.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -457.86932,
IM9: -524.12823
},
{
frequency: 1889.9701,
RX: undefined,
IM3: undefined,
IM5: -396.86847,
IM7: undefined,
IM9: undefined
},
{
frequency: 1890.0111,
RX: undefined,
IM3: -319.01147,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1890.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -458.09177,
IM9: -524.2946
},
{
frequency: 1890.4701,
RX: undefined,
IM3: undefined,
IM5: -397.10083,
IM7: undefined,
IM9: undefined
},
{
frequency: 1890.5111,
RX: undefined,
IM3: -318.74387,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1890.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -458.3174,
IM9: -524.46356
},
{
frequency: 1890.9701,
RX: undefined,
IM3: undefined,
IM5: -397.29172,
IM7: undefined,
IM9: undefined
},
{
frequency: 1891.0111,
RX: undefined,
IM3: -318.49432,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1891.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -458.54132,
IM9: -524.6298
},
{
frequency: 1891.4701,
RX: undefined,
IM3: undefined,
IM5: -397.4064,
IM7: undefined,
IM9: undefined
},
{
frequency: 1891.5111,
RX: undefined,
IM3: -318.2533,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1891.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -458.76593,
IM9: -524.79834
},
{
frequency: 1891.9701,
RX: undefined,
IM3: undefined,
IM5: -397.421,
IM7: undefined,
IM9: undefined
},
{
frequency: 1892.0111,
RX: undefined,
IM3: -318.02844,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1892.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -458.98785,
IM9: -524.9644
},
{
frequency: 1892.4701,
RX: undefined,
IM3: undefined,
IM5: -397.354,
IM7: undefined,
IM9: undefined
},
{
frequency: 1892.5111,
RX: undefined,
IM3: -317.8082,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1892.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -459.2085,
IM9: -525.132
},
{
frequency: 1892.9701,
RX: undefined,
IM3: undefined,
IM5: -397.18732,
IM7: undefined,
IM9: undefined
},
{
frequency: 1893.0111,
RX: undefined,
IM3: -317.5829,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1893.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -459.41223,
IM9: -525.295
},
{
frequency: 1893.4701,
RX: undefined,
IM3: undefined,
IM5: -396.9348,
IM7: undefined,
IM9: undefined
},
{
frequency: 1893.5111,
RX: undefined,
IM3: -317.3589,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1893.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -459.61203,
IM9: -525.4587
},
{
frequency: 1893.9701,
RX: undefined,
IM3: undefined,
IM5: -396.60657,
IM7: undefined,
IM9: undefined
},
{
frequency: 1894.0111,
RX: undefined,
IM3: -317.136,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1894.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -459.79547,
IM9: -525.6155
},
{
frequency: 1894.4701,
RX: undefined,
IM3: undefined,
IM5: -396.23282,
IM7: undefined,
IM9: undefined
},
{
frequency: 1894.5111,
RX: undefined,
IM3: -316.91385,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1894.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -459.96515,
IM9: -525.7723
},
{
frequency: 1894.9701,
RX: undefined,
IM3: undefined,
IM5: -395.8354,
IM7: undefined,
IM9: undefined
},
{
frequency: 1895.0111,
RX: undefined,
IM3: -316.72427,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1895.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.1173,
IM9: -525.92487
},
{
frequency: 1895.4701,
RX: undefined,
IM3: undefined,
IM5: -395.42227,
IM7: undefined,
IM9: undefined
},
{
frequency: 1895.5111,
RX: undefined,
IM3: -316.56885,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1895.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.25858,
IM9: -526.07245
},
{
frequency: 1895.9701,
RX: undefined,
IM3: undefined,
IM5: -395.01343,
IM7: undefined,
IM9: undefined
},
{
frequency: 1896.0111,
RX: undefined,
IM3: -316.44452,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1896.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.3801,
IM9: -526.21783
},
{
frequency: 1896.4701,
RX: undefined,
IM3: undefined,
IM5: -394.617,
IM7: undefined,
IM9: undefined
},
{
frequency: 1896.5111,
RX: undefined,
IM3: -316.34628,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1896.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.4835,
IM9: -526.35693
},
{
frequency: 1896.9701,
RX: undefined,
IM3: undefined,
IM5: -394.24106,
IM7: undefined,
IM9: undefined
},
{
frequency: 1897.0111,
RX: undefined,
IM3: -316.28076,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1897.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.57263,
IM9: -526.4926
},
{
frequency: 1897.4701,
RX: undefined,
IM3: undefined,
IM5: -393.88672,
IM7: undefined,
IM9: undefined
},
{
frequency: 1897.5111,
RX: undefined,
IM3: -316.2451,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1897.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.64816,
IM9: -526.62585
},
{
frequency: 1897.9701,
RX: undefined,
IM3: undefined,
IM5: -393.5679,
IM7: undefined,
IM9: undefined
},
{
frequency: 1898.0111,
RX: undefined,
IM3: -316.22717,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1898.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.7135,
IM9: -526.7553
},
{
frequency: 1898.4701,
RX: undefined,
IM3: undefined,
IM5: -393.272,
IM7: undefined,
IM9: undefined
},
{
frequency: 1898.5111,
RX: undefined,
IM3: -316.2087,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1898.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.7671,
IM9: -526.87964
},
{
frequency: 1898.9701,
RX: undefined,
IM3: undefined,
IM5: -393.0066,
IM7: undefined,
IM9: undefined
},
{
frequency: 1899.0111,
RX: undefined,
IM3: -316.18628,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1899.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.8162,
IM9: -527.00323
},
{
frequency: 1899.4701,
RX: undefined,
IM3: undefined,
IM5: -392.7754,
IM7: undefined,
IM9: undefined
},
{
frequency: 1899.5111,
RX: undefined,
IM3: -316.1644,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1899.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.8596,
IM9: -527.1257
},
{
frequency: 1899.9701,
RX: undefined,
IM3: undefined,
IM5: -392.56708,
IM7: undefined,
IM9: undefined
},
{
frequency: 1900.0111,
RX: undefined,
IM3: -316.1486,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1900.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.90033,
IM9: -527.246
},
{
frequency: 1900.4701,
RX: undefined,
IM3: undefined,
IM5: -392.39145,
IM7: undefined,
IM9: undefined
},
{
frequency: 1900.5111,
RX: undefined,
IM3: -316.1322,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1900.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.94168,
IM9: -527.36566
},
{
frequency: 1900.9701,
RX: undefined,
IM3: undefined,
IM5: -392.2483,
IM7: undefined,
IM9: undefined
},
{
frequency: 1901.0111,
RX: undefined,
IM3: -316.11783,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1901.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.98526,
IM9: -527.4822
},
{
frequency: 1901.4701,
RX: undefined,
IM3: undefined,
IM5: -392.13098,
IM7: undefined,
IM9: undefined
},
{
frequency: 1901.5111,
RX: undefined,
IM3: -316.1012,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1901.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.03452,
IM9: -527.6043
},
{
frequency: 1901.9701,
RX: undefined,
IM3: undefined,
IM5: -392.0423,
IM7: undefined,
IM9: undefined
},
{
frequency: 1902.0111,
RX: undefined,
IM3: -316.08835,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1902.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.08798,
IM9: -527.7235
},
{
frequency: 1902.4701,
RX: undefined,
IM3: undefined,
IM5: -391.98456,
IM7: undefined,
IM9: undefined
},
{
frequency: 1902.5111,
RX: undefined,
IM3: -316.08377,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1902.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.1546,
IM9: -527.84546
},
{
frequency: 1902.9701,
RX: undefined,
IM3: undefined,
IM5: -391.95706,
IM7: undefined,
IM9: undefined
},
{
frequency: 1903.0111,
RX: undefined,
IM3: -316.0931,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1903.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.22815,
IM9: -527.9694
},
{
frequency: 1903.4701,
RX: undefined,
IM3: undefined,
IM5: -391.96097,
IM7: undefined,
IM9: undefined
},
{
frequency: 1903.5111,
RX: undefined,
IM3: -316.1208,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1903.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.30945,
IM9: -528.099
},
{
frequency: 1903.9701,
RX: undefined,
IM3: undefined,
IM5: -391.99402,
IM7: undefined,
IM9: undefined
},
{
frequency: 1904.0111,
RX: undefined,
IM3: -316.16595,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1904.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.4054,
IM9: -528.2272
},
{
frequency: 1904.4701,
RX: undefined,
IM3: undefined,
IM5: -392.05438,
IM7: undefined,
IM9: undefined
},
{
frequency: 1904.5111,
RX: undefined,
IM3: -316.26483,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1904.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.51022,
IM9: -528.35785
},
{
frequency: 1904.9701,
RX: undefined,
IM3: undefined,
IM5: -392.14255,
IM7: undefined,
IM9: undefined
},
{
frequency: 1905.0111,
RX: undefined,
IM3: -316.41556,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1905.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.62415,
IM9: -528.49066
},
{
frequency: 1905.4701,
RX: undefined,
IM3: undefined,
IM5: -392.25974,
IM7: undefined,
IM9: undefined
},
{
frequency: 1905.5111,
RX: undefined,
IM3: -316.59598,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1905.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.75302,
IM9: -528.62994
},
{
frequency: 1905.9701,
RX: undefined,
IM3: undefined,
IM5: -392.40662,
IM7: undefined,
IM9: undefined
},
{
frequency: 1906.0111,
RX: undefined,
IM3: -316.79013,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1906.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.89313,
IM9: -528.7716
},
{
frequency: 1906.4701,
RX: undefined,
IM3: undefined,
IM5: -392.573,
IM7: undefined,
IM9: undefined
},
{
frequency: 1906.5111,
RX: undefined,
IM3: -316.99707,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1906.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -462.03906,
IM9: -528.9116
},
{
frequency: 1906.9701,
RX: undefined,
IM3: undefined,
IM5: -392.76428,
IM7: undefined,
IM9: undefined
},
{
frequency: 1907.0111,
RX: undefined,
IM3: -317.2155,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1907.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -462.1896,
IM9: -529.05804
},
{
frequency: 1907.4701,
RX: undefined,
IM3: undefined,
IM5: -392.97122,
IM7: undefined,
IM9: undefined
},
{
frequency: 1907.5111,
RX: undefined,
IM3: -317.44318,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1907.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -462.35437,
IM9: -529.20374
},
{
frequency: 1907.9701,
RX: undefined,
IM3: undefined,
IM5: -393.2046,
IM7: undefined,
IM9: undefined
},
{
frequency: 1908.0111,
RX: undefined,
IM3: -317.68472,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1908.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -462.52017,
IM9: -529.35114
},
{
frequency: 1908.4701,
RX: undefined,
IM3: undefined,
IM5: -393.44846,
IM7: undefined,
IM9: undefined
},
{
frequency: 1908.5111,
RX: undefined,
IM3: -317.94397,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1908.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -462.69315,
IM9: -529.4996
},
{
frequency: 1908.9701,
RX: undefined,
IM3: undefined,
IM5: -393.70685,
IM7: undefined,
IM9: undefined
},
{
frequency: 1909.0111,
RX: undefined,
IM3: -318.2214,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1909.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -462.86584,
IM9: -529.6478
},
{
frequency: 1909.4701,
RX: undefined,
IM3: undefined,
IM5: -393.97897,
IM7: undefined,
IM9: undefined
},
{
frequency: 1909.5111,
RX: undefined,
IM3: -318.52905,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1909.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -463.03857,
IM9: -529.797
},
{
frequency: 1909.9701,
RX: undefined,
IM3: undefined,
IM5: -394.26114,
IM7: undefined,
IM9: undefined
},
{
frequency: 1910.0111,
RX: undefined,
IM3: -318.8504,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1910.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -463.206,
IM9: -529.93994
},
{
frequency: 1910.4701,
RX: undefined,
IM3: undefined,
IM5: -394.536,
IM7: undefined,
IM9: undefined
},
{
frequency: 1910.5111,
RX: undefined,
IM3: -319.18774,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1910.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -463.3705,
IM9: -530.081
},
{
frequency: 1910.9702,
RX: undefined,
IM3: undefined,
IM5: -394.81747,
IM7: undefined,
IM9: undefined
},
{
frequency: 1911.0111,
RX: undefined,
IM3: -319.5652,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1911.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -463.52438,
IM9: -530.21985
},
{
frequency: 1911.4702,
RX: undefined,
IM3: undefined,
IM5: -395.08786,
IM7: undefined,
IM9: undefined
},
{
frequency: 1911.5111,
RX: undefined,
IM3: -319.9726,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1911.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -463.67282,
IM9: -530.3592
},
{
frequency: 1911.9702,
RX: undefined,
IM3: undefined,
IM5: -395.34277,
IM7: undefined,
IM9: undefined
},
{
frequency: 1912.0111,
RX: undefined,
IM3: -320.40994,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1912.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -463.80322,
IM9: -530.491
},
{
frequency: 1912.4702,
RX: undefined,
IM3: undefined,
IM5: -395.58438,
IM7: undefined,
IM9: undefined
},
{
frequency: 1912.5111,
RX: undefined,
IM3: -320.89874,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1912.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -463.92886,
IM9: -530.6184
},
{
frequency: 1912.9702,
RX: undefined,
IM3: undefined,
IM5: -395.80588,
IM7: undefined,
IM9: undefined
},
{
frequency: 1912.9982,
RX: undefined,
IM3: -321.40253,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1913.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.03506,
IM9: -530.74384
},
{
frequency: 1913.4541,
RX: undefined,
IM3: -321.9048,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1913.4702,
RX: undefined,
IM3: undefined,
IM5: -395.99683,
IM7: undefined,
IM9: undefined
},
{
frequency: 1913.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.13025,
IM9: -530.8588
},
{
frequency: 1913.8632,
RX: undefined,
IM3: -322.40775,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1913.9702,
RX: undefined,
IM3: undefined,
IM5: -396.14545,
IM7: undefined,
IM9: undefined
},
{
frequency: 1914.2401,
RX: undefined,
IM3: -322.90863,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1914.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.21097,
IM9: -530.9698
},
{
frequency: 1914.4702,
RX: undefined,
IM3: undefined,
IM5: -396.25897,
IM7: undefined,
IM9: undefined
},
{
frequency: 1914.6162,
RX: undefined,
IM3: -323.41415,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1914.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.27707,
IM9: -531.0766
},
{
frequency: 1914.9702,
RX: undefined,
IM3: undefined,
IM5: -396.34824,
IM7: undefined,
IM9: undefined
},
{
frequency: 1915.0032,
RX: undefined,
IM3: -323.91855,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1915.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.33163,
IM9: -531.1766
},
{
frequency: 1915.4082,
RX: undefined,
IM3: -324.42462,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1915.4702,
RX: undefined,
IM3: undefined,
IM5: -396.39868,
IM7: undefined,
IM9: undefined
},
{
frequency: 1915.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.37885,
IM9: -531.27704
},
{
frequency: 1915.8462,
RX: undefined,
IM3: -324.92535,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1915.9702,
RX: undefined,
IM3: undefined,
IM5: -396.42084,
IM7: undefined,
IM9: undefined
},
{
frequency: 1916.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.4219,
IM9: -531.3718
},
{
frequency: 1916.3341,
RX: undefined,
IM3: -325.42755,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1916.4702,
RX: undefined,
IM3: undefined,
IM5: -396.4235,
IM7: undefined,
IM9: undefined
},
{
frequency: 1916.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.46106,
IM9: -531.46625
},
{
frequency: 1916.8271,
RX: undefined,
IM3: -325.93314,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1916.9702,
RX: undefined,
IM3: undefined,
IM5: -396.41125,
IM7: undefined,
IM9: undefined
},
{
frequency: 1917.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.49084,
IM9: -531.55164
},
{
frequency: 1917.3271,
RX: undefined,
IM3: -326.4304,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1917.4702,
RX: undefined,
IM3: undefined,
IM5: -396.37418,
IM7: undefined,
IM9: undefined
},
{
frequency: 1917.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.52835,
IM9: -531.6438
},
{
frequency: 1917.8271,
RX: undefined,
IM3: -326.90027,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1917.9702,
RX: undefined,
IM3: undefined,
IM5: -396.3561,
IM7: undefined,
IM9: undefined
},
{
frequency: 1918.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.56766,
IM9: -531.73065
},
{
frequency: 1918.3271,
RX: undefined,
IM3: -327.2996,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1918.4702,
RX: undefined,
IM3: undefined,
IM5: -396.3312,
IM7: undefined,
IM9: undefined
},
{
frequency: 1918.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.6136,
IM9: -531.819
},
{
frequency: 1918.8271,
RX: undefined,
IM3: -327.52045,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1918.9702,
RX: undefined,
IM3: undefined,
IM5: -396.3078,
IM7: undefined,
IM9: undefined
},
{
frequency: 1919.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.66452,
IM9: -531.9023
},
{
frequency: 1919.3271,
RX: undefined,
IM3: -327.5625,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1919.4702,
RX: undefined,
IM3: undefined,
IM5: -396.30658,
IM7: undefined,
IM9: undefined
},
{
frequency: 1919.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.72882,
IM9: -531.9987
},
{
frequency: 1919.8271,
RX: undefined,
IM3: -327.44894,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1919.9702,
RX: undefined,
IM3: undefined,
IM5: -396.32416,
IM7: undefined,
IM9: undefined
},
{
frequency: 1920.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.80722,
IM9: -532.08844
},
{
frequency: 1920.3271,
RX: undefined,
IM3: -327.24915,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1920.4702,
RX: undefined,
IM3: undefined,
IM5: -396.35776,
IM7: undefined,
IM9: undefined
},
{
frequency: 1920.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.89786,
IM9: -532.1846
},
{
frequency: 1920.8271,
RX: undefined,
IM3: -326.97092,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1920.9702,
RX: undefined,
IM3: undefined,
IM5: -396.43604,
IM7: undefined,
IM9: undefined
},
{
frequency: 1921.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.99664,
IM9: -532.2791
},
{
frequency: 1921.3271,
RX: undefined,
IM3: -326.60013,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1921.4702,
RX: undefined,
IM3: undefined,
IM5: -396.5186,
IM7: undefined,
IM9: undefined
},
{
frequency: 1921.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -465.122,
IM9: -532.38245
},
{
frequency: 1921.8271,
RX: undefined,
IM3: -326.26144,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1921.9702,
RX: undefined,
IM3: undefined,
IM5: -396.65033,
IM7: undefined,
IM9: undefined
},
{
frequency: 1922.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -465.25134,
IM9: -532.4888
},
{
frequency: 1922.3271,
RX: undefined,
IM3: -325.98157,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1922.4702,
RX: undefined,
IM3: undefined,
IM5: -396.81335,
IM7: undefined,
IM9: undefined
},
{
frequency: 1922.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -465.40558,
IM9: -532.5978
},
{
frequency: 1922.8271,
RX: undefined,
IM3: -325.76868,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1922.9702,
RX: undefined,
IM3: undefined,
IM5: -397.0219,
IM7: undefined,
IM9: undefined
},
{
frequency: 1923.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -465.57907,
IM9: -532.70966
},
{
frequency: 1923.3271,
RX: undefined,
IM3: -325.6076,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1923.4702,
RX: undefined,
IM3: undefined,
IM5: -397.27295,
IM7: undefined,
IM9: undefined
},
{
frequency: 1923.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -465.7677,
IM9: -532.823
},
{
frequency: 1923.8271,
RX: undefined,
IM3: -325.48944,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1923.9702,
RX: undefined,
IM3: undefined,
IM5: -397.55524,
IM7: undefined,
IM9: undefined
},
{
frequency: 1924.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -465.97424,
IM9: -532.95
},
{
frequency: 1924.3271,
RX: undefined,
IM3: -325.40988,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1924.4702,
RX: undefined,
IM3: undefined,
IM5: -397.90204,
IM7: undefined,
IM9: undefined
},
{
frequency: 1924.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -466.1835,
IM9: -533.07
},
{
frequency: 1924.8271,
RX: undefined,
IM3: -325.3754,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1924.9702,
RX: undefined,
IM3: undefined,
IM5: -398.28625,
IM7: undefined,
IM9: undefined
},
{
frequency: 1925.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -466.42468,
IM9: -533.19354
},
{
frequency: 1925.3271,
RX: undefined,
IM3: -325.38812,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1925.4702,
RX: undefined,
IM3: undefined,
IM5: -398.733,
IM7: undefined,
IM9: undefined
},
{
frequency: 1925.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -466.66418,
IM9: -533.3209
},
{
frequency: 1925.8271,
RX: undefined,
IM3: -325.4447,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1925.9702,
RX: undefined,
IM3: undefined,
IM5: -399.22247,
IM7: undefined,
IM9: undefined
},
{
frequency: 1926.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -466.91846,
IM9: -533.4453
},
{
frequency: 1926.3271,
RX: undefined,
IM3: -325.5739,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1926.4182,
RX: undefined,
IM3: undefined,
IM5: -399.72507,
IM7: undefined,
IM9: undefined
},
{
frequency: 1926.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.1774,
IM9: -533.57025
},
{
frequency: 1926.8271,
RX: undefined,
IM3: -325.71204,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1926.8352,
RX: undefined,
IM3: undefined,
IM5: -400.2282,
IM7: undefined,
IM9: undefined
},
{
frequency: 1927.2122,
RX: undefined,
IM3: undefined,
IM5: -400.7352,
IM7: undefined,
IM9: undefined
},
{
frequency: 1927.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.4387,
IM9: -533.6919
},
{
frequency: 1927.3271,
RX: undefined,
IM3: -325.81143,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1927.5692,
RX: undefined,
IM3: undefined,
IM5: -401.24448,
IM7: undefined,
IM9: undefined
},
{
frequency: 1927.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.6987,
IM9: -533.811
},
{
frequency: 1927.8271,
RX: undefined,
IM3: -325.8469,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1927.8992,
RX: undefined,
IM3: undefined,
IM5: -401.74506,
IM7: undefined,
IM9: undefined
},
{
frequency: 1928.1952,
RX: undefined,
IM3: undefined,
IM5: -402.24548,
IM7: undefined,
IM9: undefined
},
{
frequency: 1928.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.95343,
IM9: -533.9293
},
{
frequency: 1928.3271,
RX: undefined,
IM3: -325.839,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1928.4752,
RX: undefined,
IM3: undefined,
IM5: -402.75504,
IM7: undefined,
IM9: undefined
},
{
frequency: 1928.7402,
RX: undefined,
IM3: undefined,
IM5: -403.25522,
IM7: undefined,
IM9: undefined
},
{
frequency: 1928.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.19507,
IM9: -534.0364
},
{
frequency: 1928.8271,
RX: undefined,
IM3: -325.8196,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1928.9912,
RX: undefined,
IM3: undefined,
IM5: -403.76907,
IM7: undefined,
IM9: undefined
},
{
frequency: 1929.2252,
RX: undefined,
IM3: undefined,
IM5: -404.26987,
IM7: undefined,
IM9: undefined
},
{
frequency: 1929.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.4171,
IM9: -534.1448
},
{
frequency: 1929.3271,
RX: undefined,
IM3: -325.81857,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1929.4412,
RX: undefined,
IM3: undefined,
IM5: -404.7718,
IM7: undefined,
IM9: undefined
},
{
frequency: 1929.6472,
RX: undefined,
IM3: undefined,
IM5: -405.2843,
IM7: undefined,
IM9: undefined
},
{
frequency: 1929.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.61774,
IM9: -534.24225
},
{
frequency: 1929.8271,
RX: undefined,
IM3: -325.86404,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1929.8431,
RX: undefined,
IM3: undefined,
IM5: -405.7935,
IM7: undefined,
IM9: undefined
},
{
frequency: 1930.0292,
RX: undefined,
IM3: undefined,
IM5: -406.30276,
IM7: undefined,
IM9: undefined
},
{
frequency: 1930.2052,
RX: undefined,
IM3: undefined,
IM5: -406.80344,
IM7: undefined,
IM9: undefined
},
{
frequency: 1930.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.79416,
IM9: -534.338
},
{
frequency: 1930.3271,
RX: undefined,
IM3: -325.95505,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1930.3531,
RX: undefined,
IM3: undefined,
IM5: -407.30475,
IM7: undefined,
IM9: undefined
},
{
frequency: 1930.5151,
RX: undefined,
IM3: undefined,
IM5: -407.82053,
IM7: undefined,
IM9: undefined
},
{
frequency: 1930.6682,
RX: undefined,
IM3: undefined,
IM5: -408.3285,
IM7: undefined,
IM9: undefined
},
{
frequency: 1930.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.93988,
IM9: -534.42236
},
{
frequency: 1930.8071,
RX: undefined,
IM3: undefined,
IM5: -408.85095,
IM7: undefined,
IM9: undefined
},
{
frequency: 1930.8271,
RX: undefined,
IM3: -326.04407,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1930.9442,
RX: undefined,
IM3: undefined,
IM5: -409.36697,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.0732,
RX: undefined,
IM3: undefined,
IM5: -409.8872,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.1932,
RX: undefined,
IM3: undefined,
IM5: -410.38968,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.05493,
IM9: -534.4956
},
{
frequency: 1931.3052,
RX: undefined,
IM3: undefined,
IM5: -410.89233,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.3271,
RX: undefined,
IM3: -326.21555,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.4111,
RX: undefined,
IM3: undefined,
IM5: -411.39676,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.5182,
RX: undefined,
IM3: undefined,
IM5: -411.92728,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.6162,
RX: undefined,
IM3: undefined,
IM5: -412.43356,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.7102,
RX: undefined,
IM3: undefined,
IM5: -412.94754,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.13834,
IM9: -534.5716
},
{
frequency: 1931.8022,
RX: undefined,
IM3: undefined,
IM5: -413.4547,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.8271,
RX: undefined,
IM3: -326.44693,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.8862,
RX: undefined,
IM3: undefined,
IM5: -413.9819,
IM7: undefined,
IM9: undefined
},
{
frequency: 1931.9672,
RX: undefined,
IM3: undefined,
IM5: -414.48822,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.0461,
RX: undefined,
IM3: undefined,
IM5: -414.9993,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.1102,
RX: undefined,
IM3: undefined,
IM5: -415.50015,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.1902,
RX: undefined,
IM3: undefined,
IM5: -416.039,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.2592,
RX: undefined,
IM3: undefined,
IM5: -416.54337,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.17773,
IM9: -534.6297
},
{
frequency: 1932.3212,
RX: undefined,
IM3: undefined,
IM5: -417.07477,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.3271,
RX: undefined,
IM3: -326.72156,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.3851,
RX: undefined,
IM3: undefined,
IM5: -417.60672,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.4502,
RX: undefined,
IM3: undefined,
IM5: -418.15723,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.5112,
RX: undefined,
IM3: undefined,
IM5: -418.68646,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.5621,
RX: undefined,
IM3: undefined,
IM5: -419.19485,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.6202,
RX: undefined,
IM3: undefined,
IM5: -419.71692,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.6702,
RX: undefined,
IM3: undefined,
IM5: -420.27545,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.7231,
RX: undefined,
IM3: undefined,
IM5: -420.8282,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.7802,
RX: undefined,
IM3: undefined,
IM5: -421.38312,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.18945,
IM9: -534.6856
},
{
frequency: 1932.8271,
RX: undefined,
IM3: -327.01425,
IM5: -421.8999,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.8802,
RX: undefined,
IM3: undefined,
IM5: -422.40268,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.9332,
RX: undefined,
IM3: undefined,
IM5: -423.0681,
IM7: undefined,
IM9: undefined
},
{
frequency: 1932.9962,
RX: undefined,
IM3: undefined,
IM5: -423.57608,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.0542,
RX: undefined,
IM3: undefined,
IM5: -424.12787,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.1292,
RX: undefined,
IM3: undefined,
IM5: -424.6427,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.2441,
RX: undefined,
IM3: undefined,
IM5: -425.18115,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.1868,
IM9: -534.7381
},
{
frequency: 1933.3271,
RX: undefined,
IM3: -327.30118,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.3672,
RX: undefined,
IM3: undefined,
IM5: -424.62024,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.4802,
RX: undefined,
IM3: undefined,
IM5: -424.0837,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.5492,
RX: undefined,
IM3: undefined,
IM5: -423.57834,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.5981,
RX: undefined,
IM3: undefined,
IM5: -423.01263,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.6642,
RX: undefined,
IM3: undefined,
IM5: -422.49832,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.7192,
RX: undefined,
IM3: undefined,
IM5: -421.9233,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.7882,
RX: undefined,
IM3: undefined,
IM5: -421.421,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.15326,
IM9: -534.7798
},
{
frequency: 1933.8271,
RX: undefined,
IM3: -327.57867,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.8422,
RX: undefined,
IM3: undefined,
IM5: -420.913,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.8992,
RX: undefined,
IM3: undefined,
IM5: -420.3259,
IM7: undefined,
IM9: undefined
},
{
frequency: 1933.9583,
RX: undefined,
IM3: undefined,
IM5: -419.81992,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.0251,
RX: undefined,
IM3: undefined,
IM5: -419.279,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.1031,
RX: undefined,
IM3: undefined,
IM5: -418.71915,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.1782,
RX: undefined,
IM3: undefined,
IM5: -418.21634,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.2542,
RX: undefined,
IM3: undefined,
IM5: -417.7128,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.11996,
IM9: -534.8265
},
{
frequency: 1934.3271,
RX: undefined,
IM3: -327.8157,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.3302,
RX: undefined,
IM3: undefined,
IM5: -417.1955,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.4092,
RX: undefined,
IM3: undefined,
IM5: -416.67593,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.5022,
RX: undefined,
IM3: undefined,
IM5: -416.17206,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.6012,
RX: undefined,
IM3: undefined,
IM5: -415.67072,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.6921,
RX: undefined,
IM3: undefined,
IM5: -415.1597,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.05576,
IM9: -534.8607
},
{
frequency: 1934.8112,
RX: undefined,
IM3: undefined,
IM5: -414.62625,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.8271,
RX: undefined,
IM3: -328.0027,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1934.9323,
RX: undefined,
IM3: undefined,
IM5: -414.09882,
IM7: undefined,
IM9: undefined
},
{
frequency: 1935.0582,
RX: undefined,
IM3: undefined,
IM5: -413.5978,
IM7: undefined,
IM9: undefined
},
{
frequency: 1935.2052,
RX: undefined,
IM3: undefined,
IM5: -413.09335,
IM7: undefined,
IM9: undefined
},
{
frequency: 1935.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.00024,
IM9: -534.89386
},
{
frequency: 1935.3271,
RX: undefined,
IM3: -328.1101,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1935.3552,
RX: undefined,
IM3: undefined,
IM5: -412.59317,
IM7: undefined,
IM9: undefined
},
{
frequency: 1935.5151,
RX: undefined,
IM3: undefined,
IM5: -412.09177,
IM7: undefined,
IM9: undefined
},
{
frequency: 1935.7012,
RX: undefined,
IM3: undefined,
IM5: -411.5901,
IM7: undefined,
IM9: undefined
},
{
frequency: 1935.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.93948,
IM9: -534.93365
},
{
frequency: 1935.8271,
RX: undefined,
IM3: -328.17245,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1935.8912,
RX: undefined,
IM3: undefined,
IM5: -411.08264,
IM7: undefined,
IM9: undefined
},
{
frequency: 1936.1222,
RX: undefined,
IM3: undefined,
IM5: -410.57318,
IM7: undefined,
IM9: undefined
},
{
frequency: 1936.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.88593,
IM9: -534.96594
},
{
frequency: 1936.3271,
RX: undefined,
IM3: -328.13074,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1936.3662,
RX: undefined,
IM3: undefined,
IM5: -410.06976,
IM7: undefined,
IM9: undefined
},
{
frequency: 1936.6501,
RX: undefined,
IM3: undefined,
IM5: -409.568,
IM7: undefined,
IM9: undefined
},
{
frequency: 1936.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.84195,
IM9: -535.0048
},
{
frequency: 1936.8271,
RX: undefined,
IM3: -327.94608,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1936.9742,
RX: undefined,
IM3: undefined,
IM5: -409.0646,
IM7: undefined,
IM9: undefined
},
{
frequency: 1937.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.79694,
IM9: -535.04913
},
{
frequency: 1937.3271,
RX: undefined,
IM3: -327.63608,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1937.3372,
RX: undefined,
IM3: undefined,
IM5: -408.5645,
IM7: undefined,
IM9: undefined
},
{
frequency: 1937.7872,
RX: undefined,
IM3: undefined,
IM5: -408.05658,
IM7: undefined,
IM9: undefined
},
{
frequency: 1937.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.7777,
IM9: -535.08734
},
{
frequency: 1937.8271,
RX: undefined,
IM3: -327.28244,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1938.2872,
RX: undefined,
IM3: undefined,
IM5: -407.61465,
IM7: undefined,
IM9: undefined
},
{
frequency: 1938.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.76846,
IM9: -535.1316
},
{
frequency: 1938.3271,
RX: undefined,
IM3: -326.94083,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1938.7872,
RX: undefined,
IM3: undefined,
IM5: -407.21606,
IM7: undefined,
IM9: undefined
},
{
frequency: 1938.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.76578,
IM9: -535.1807
},
{
frequency: 1938.8271,
RX: undefined,
IM3: -326.61438,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1939.2872,
RX: undefined,
IM3: undefined,
IM5: -406.88745,
IM7: undefined,
IM9: undefined
},
{
frequency: 1939.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.79144,
IM9: -535.2404
},
{
frequency: 1939.3271,
RX: undefined,
IM3: -326.29657,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1939.7872,
RX: undefined,
IM3: undefined,
IM5: -406.5853,
IM7: undefined,
IM9: undefined
},
{
frequency: 1939.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.8289,
IM9: -535.29156
},
{
frequency: 1939.8271,
RX: undefined,
IM3: -325.96036,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1940.2872,
RX: undefined,
IM3: undefined,
IM5: -406.32193,
IM7: undefined,
IM9: undefined
},
{
frequency: 1940.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.88333,
IM9: -535.3587
},
{
frequency: 1940.3271,
RX: undefined,
IM3: -325.57495,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1940.7872,
RX: undefined,
IM3: undefined,
IM5: -406.03677,
IM7: undefined,
IM9: undefined
},
{
frequency: 1940.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.9431,
IM9: -535.431
},
{
frequency: 1940.8271,
RX: undefined,
IM3: -325.1588,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1941.2872,
RX: undefined,
IM3: undefined,
IM5: -405.73447,
IM7: undefined,
IM9: undefined
},
{
frequency: 1941.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.0237,
IM9: -535.49884
},
{
frequency: 1941.3271,
RX: undefined,
IM3: -324.71304,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1941.7872,
RX: undefined,
IM3: undefined,
IM5: -405.41278,
IM7: undefined,
IM9: undefined
},
{
frequency: 1941.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.1078,
IM9: -535.5767
},
{
frequency: 1941.8271,
RX: undefined,
IM3: -324.25702,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1942.2872,
RX: undefined,
IM3: undefined,
IM5: -405.04437,
IM7: undefined,
IM9: undefined
},
{
frequency: 1942.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.19614,
IM9: -535.6515
},
{
frequency: 1942.3271,
RX: undefined,
IM3: -323.82834,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1942.7872,
RX: undefined,
IM3: undefined,
IM5: -404.64383,
IM7: undefined,
IM9: undefined
},
{
frequency: 1942.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.30054,
IM9: -535.7327
},
{
frequency: 1942.8271,
RX: undefined,
IM3: -323.3929,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1943.2872,
RX: undefined,
IM3: undefined,
IM5: -404.1811,
IM7: undefined,
IM9: undefined
},
{
frequency: 1943.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.39636,
IM9: -535.8058
},
{
frequency: 1943.3271,
RX: undefined,
IM3: -322.9718,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1943.7872,
RX: undefined,
IM3: undefined,
IM5: -403.68546,
IM7: undefined,
IM9: undefined
},
{
frequency: 1943.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.48795,
IM9: -535.89435
},
{
frequency: 1943.8271,
RX: undefined,
IM3: -322.5963,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1944.2582,
RX: undefined,
IM3: undefined,
IM5: -403.17694,
IM7: undefined,
IM9: undefined
},
{
frequency: 1944.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.56763,
IM9: -535.97205
},
{
frequency: 1944.3271,
RX: undefined,
IM3: -322.25568,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1944.7292,
RX: undefined,
IM3: undefined,
IM5: -402.6769,
IM7: undefined,
IM9: undefined
},
{
frequency: 1944.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.63046,
IM9: -536.0448
},
{
frequency: 1944.8271,
RX: undefined,
IM3: -321.94046,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1945.1752,
RX: undefined,
IM3: undefined,
IM5: -402.17685,
IM7: undefined,
IM9: undefined
},
{
frequency: 1945.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.68796,
IM9: -536.1235
},
{
frequency: 1945.3273,
RX: undefined,
IM3: -321.6524,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1945.6353,
RX: undefined,
IM3: undefined,
IM5: -401.66394,
IM7: undefined,
IM9: undefined
},
{
frequency: 1945.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.72882,
IM9: -536.19464
},
{
frequency: 1945.8273,
RX: undefined,
IM3: -321.37704,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1946.1012,
RX: undefined,
IM3: undefined,
IM5: -401.1618,
IM7: undefined,
IM9: undefined
},
{
frequency: 1946.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.73203,
IM9: -536.256
},
{
frequency: 1946.3273,
RX: undefined,
IM3: -321.0901,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1946.5682,
RX: undefined,
IM3: undefined,
IM5: -400.6592,
IM7: undefined,
IM9: undefined
},
{
frequency: 1946.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.71158,
IM9: -536.3127
},
{
frequency: 1946.8273,
RX: undefined,
IM3: -320.82242,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1947.0413,
RX: undefined,
IM3: undefined,
IM5: -400.1505,
IM7: undefined,
IM9: undefined
},
{
frequency: 1947.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.6747,
IM9: -536.35986
},
{
frequency: 1947.3273,
RX: undefined,
IM3: -320.5802,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1947.5413,
RX: undefined,
IM3: undefined,
IM5: -399.6601,
IM7: undefined,
IM9: undefined
},
{
frequency: 1947.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.5975,
IM9: -536.4052
},
{
frequency: 1947.8273,
RX: undefined,
IM3: -320.35532,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1948.0413,
RX: undefined,
IM3: undefined,
IM5: -399.16394,
IM7: undefined,
IM9: undefined
},
{
frequency: 1948.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.51367,
IM9: -536.44415
},
{
frequency: 1948.3273,
RX: undefined,
IM3: -320.1473,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1948.5413,
RX: undefined,
IM3: undefined,
IM5: -398.7022,
IM7: undefined,
IM9: undefined
},
{
frequency: 1948.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.41028,
IM9: -536.4698
},
{
frequency: 1948.8273,
RX: undefined,
IM3: -319.94495,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1949.0413,
RX: undefined,
IM3: undefined,
IM5: -398.26468,
IM7: undefined,
IM9: undefined
},
{
frequency: 1949.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.2794,
IM9: -536.4955
},
{
frequency: 1949.3273,
RX: undefined,
IM3: -319.74158,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1949.5413,
RX: undefined,
IM3: undefined,
IM5: -397.86053,
IM7: undefined,
IM9: undefined
},
{
frequency: 1949.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.1352,
IM9: -536.50726
},
{
frequency: 1949.8273,
RX: undefined,
IM3: -319.53986,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1950.0413,
RX: undefined,
IM3: undefined,
IM5: -397.4754,
IM7: undefined,
IM9: undefined
},
{
frequency: 1950.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.98468,
IM9: -536.50885
},
{
frequency: 1950.3273,
RX: undefined,
IM3: -319.34116,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1950.5413,
RX: undefined,
IM3: undefined,
IM5: -397.1357,
IM7: undefined,
IM9: undefined
},
{
frequency: 1950.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.82605,
IM9: -536.5135
},
{
frequency: 1950.8273,
RX: undefined,
IM3: -319.15823,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1951.0413,
RX: undefined,
IM3: undefined,
IM5: -396.80548,
IM7: undefined,
IM9: undefined
},
{
frequency: 1951.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.66925,
IM9: -536.51843
},
{
frequency: 1951.3273,
RX: undefined,
IM3: -319.01605,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1951.5413,
RX: undefined,
IM3: undefined,
IM5: -396.5197,
IM7: undefined,
IM9: undefined
},
{
frequency: 1951.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.52768,
IM9: -536.5055
},
{
frequency: 1951.8273,
RX: undefined,
IM3: -318.9192,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1952.0413,
RX: undefined,
IM3: undefined,
IM5: -396.26306,
IM7: undefined,
IM9: undefined
},
{
frequency: 1952.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.37073,
IM9: -536.5022
},
{
frequency: 1952.3273,
RX: undefined,
IM3: -318.85327,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1952.5413,
RX: undefined,
IM3: undefined,
IM5: -396.02475,
IM7: undefined,
IM9: undefined
},
{
frequency: 1952.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.23517,
IM9: -536.4956
},
{
frequency: 1952.8273,
RX: undefined,
IM3: -318.80045,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1953.0413,
RX: undefined,
IM3: undefined,
IM5: -395.82928,
IM7: undefined,
IM9: undefined
},
{
frequency: 1953.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.12192,
IM9: -536.4872
},
{
frequency: 1953.3273,
RX: undefined,
IM3: -318.78247,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1953.5413,
RX: undefined,
IM3: undefined,
IM5: -395.6532,
IM7: undefined,
IM9: undefined
},
{
frequency: 1953.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.00403,
IM9: -536.48724
},
{
frequency: 1953.8273,
RX: undefined,
IM3: -318.7792,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1954.0413,
RX: undefined,
IM3: undefined,
IM5: -395.50836,
IM7: undefined,
IM9: undefined
},
{
frequency: 1954.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.91425,
IM9: -536.48706
},
{
frequency: 1954.3273,
RX: undefined,
IM3: -318.78177,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1954.5413,
RX: undefined,
IM3: undefined,
IM5: -395.3995,
IM7: undefined,
IM9: undefined
},
{
frequency: 1954.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.84207,
IM9: -536.4926
},
{
frequency: 1954.8273,
RX: undefined,
IM3: -318.78333,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1955.0413,
RX: undefined,
IM3: undefined,
IM5: -395.29916,
IM7: undefined,
IM9: undefined
},
{
frequency: 1955.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.78137,
IM9: -536.50085
},
{
frequency: 1955.3273,
RX: undefined,
IM3: -318.78052,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1955.5413,
RX: undefined,
IM3: undefined,
IM5: -395.23434,
IM7: undefined,
IM9: undefined
},
{
frequency: 1955.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.746,
IM9: -536.5192
},
{
frequency: 1955.8273,
RX: undefined,
IM3: -318.7717,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1956.0413,
RX: undefined,
IM3: undefined,
IM5: -395.18854,
IM7: undefined,
IM9: undefined
},
{
frequency: 1956.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.72903,
IM9: -536.5426
},
{
frequency: 1956.3273,
RX: undefined,
IM3: -318.77063,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1956.5413,
RX: undefined,
IM3: undefined,
IM5: -395.1702,
IM7: undefined,
IM9: undefined
},
{
frequency: 1956.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.7304,
IM9: -536.56903
},
{
frequency: 1956.8273,
RX: undefined,
IM3: -318.76453,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1957.0413,
RX: undefined,
IM3: undefined,
IM5: -395.1765,
IM7: undefined,
IM9: undefined
},
{
frequency: 1957.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.74893,
IM9: -536.60803
},
{
frequency: 1957.3273,
RX: undefined,
IM3: -318.76007,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1957.5413,
RX: undefined,
IM3: undefined,
IM5: -395.20786,
IM7: undefined,
IM9: undefined
},
{
frequency: 1957.8002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.7909,
IM9: -536.6478
},
{
frequency: 1957.8273,
RX: undefined,
IM3: -318.7478,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1958.0413,
RX: undefined,
IM3: undefined,
IM5: -395.2547,
IM7: undefined,
IM9: undefined
},
{
frequency: 1958.3002,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.85855,
IM9: -536.7048
},
{
frequency: 1958.3273,
RX: undefined,
IM3: -318.73773,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1958.5413,
RX: undefined,
IM3: undefined,
IM5: -395.33826,
IM7: undefined,
IM9: undefined
},
{
frequency: 1958.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.94022,
IM9: -536.7549
},
{
frequency: 1958.8273,
RX: undefined,
IM3: -318.73984,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1959.0413,
RX: undefined,
IM3: undefined,
IM5: -395.43454,
IM7: undefined,
IM9: undefined
},
{
frequency: 1959.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.0412,
IM9: -536.8219
},
{
frequency: 1959.3273,
RX: undefined,
IM3: -318.7718,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1959.5413,
RX: undefined,
IM3: undefined,
IM5: -395.56293,
IM7: undefined,
IM9: undefined
},
{
frequency: 1959.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.16373,
IM9: -536.885
},
{
frequency: 1959.8273,
RX: undefined,
IM3: -318.81638,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1960.0413,
RX: undefined,
IM3: undefined,
IM5: -395.72098,
IM7: undefined,
IM9: undefined
},
{
frequency: 1960.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.29742,
IM9: -536.9624
},
{
frequency: 1960.3273,
RX: undefined,
IM3: -318.88715,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1960.5413,
RX: undefined,
IM3: undefined,
IM5: -395.91083,
IM7: undefined,
IM9: undefined
},
{
frequency: 1960.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.44955,
IM9: -537.0387
},
{
frequency: 1960.8273,
RX: undefined,
IM3: -319.00842,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1961.0413,
RX: undefined,
IM3: undefined,
IM5: -396.12323,
IM7: undefined,
IM9: undefined
},
{
frequency: 1961.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.61945,
IM9: -537.1209
},
{
frequency: 1961.3273,
RX: undefined,
IM3: -319.17004,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1961.5413,
RX: undefined,
IM3: undefined,
IM5: -396.35254,
IM7: undefined,
IM9: undefined
},
{
frequency: 1961.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.7962,
IM9: -537.20306
},
{
frequency: 1961.8273,
RX: undefined,
IM3: -319.35236,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1962.0413,
RX: undefined,
IM3: undefined,
IM5: -396.61963,
IM7: undefined,
IM9: undefined
},
{
frequency: 1962.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.97745,
IM9: -537.2825
},
{
frequency: 1962.3273,
RX: undefined,
IM3: -319.5443,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1962.5413,
RX: undefined,
IM3: undefined,
IM5: -396.90338,
IM7: undefined,
IM9: undefined
},
{
frequency: 1962.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.17365,
IM9: -537.3682
},
{
frequency: 1962.8273,
RX: undefined,
IM3: -319.7386,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1963.0413,
RX: undefined,
IM3: undefined,
IM5: -397.20435,
IM7: undefined,
IM9: undefined
},
{
frequency: 1963.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.3655,
IM9: -537.4472
},
{
frequency: 1963.3273,
RX: undefined,
IM3: -319.93295,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1963.5413,
RX: undefined,
IM3: undefined,
IM5: -397.536,
IM7: undefined,
IM9: undefined
},
{
frequency: 1963.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.56265,
IM9: -537.5197
},
{
frequency: 1963.8273,
RX: undefined,
IM3: -320.13373,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1964.0413,
RX: undefined,
IM3: undefined,
IM5: -397.88617,
IM7: undefined,
IM9: undefined
},
{
frequency: 1964.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.74496,
IM9: -537.5904
},
{
frequency: 1964.3273,
RX: undefined,
IM3: -320.34708,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1964.5413,
RX: undefined,
IM3: undefined,
IM5: -398.24454,
IM7: undefined,
IM9: undefined
},
{
frequency: 1964.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.92947,
IM9: -537.65625
},
{
frequency: 1964.8273,
RX: undefined,
IM3: -320.58063,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1965.0413,
RX: undefined,
IM3: undefined,
IM5: -398.6279,
IM7: undefined,
IM9: undefined
},
{
frequency: 1965.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.10223,
IM9: -537.71643
},
{
frequency: 1965.3273,
RX: undefined,
IM3: -320.83942,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1965.5413,
RX: undefined,
IM3: undefined,
IM5: -399.02005,
IM7: undefined,
IM9: undefined
},
{
frequency: 1965.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.2546,
IM9: -537.7668
},
{
frequency: 1965.8273,
RX: undefined,
IM3: -321.11255,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1966.0413,
RX: undefined,
IM3: undefined,
IM5: -399.42764,
IM7: undefined,
IM9: undefined
},
{
frequency: 1966.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.38806,
IM9: -537.8117
},
{
frequency: 1966.3273,
RX: undefined,
IM3: -321.38824,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1966.5413,
RX: undefined,
IM3: undefined,
IM5: -399.83798,
IM7: undefined,
IM9: undefined
},
{
frequency: 1966.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.50586,
IM9: -537.85
},
{
frequency: 1966.8273,
RX: undefined,
IM3: -321.67783,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1967.0413,
RX: undefined,
IM3: undefined,
IM5: -400.2458,
IM7: undefined,
IM9: undefined
},
{
frequency: 1967.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.59406,
IM9: -537.8814
},
{
frequency: 1967.3273,
RX: undefined,
IM3: -321.99445,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1967.5413,
RX: undefined,
IM3: undefined,
IM5: -400.6577,
IM7: undefined,
IM9: undefined
},
{
frequency: 1967.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.6736,
IM9: -537.9029
},
{
frequency: 1967.8273,
RX: undefined,
IM3: -322.33243,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1968.0413,
RX: undefined,
IM3: undefined,
IM5: -401.03674,
IM7: undefined,
IM9: undefined
},
{
frequency: 1968.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.71945,
IM9: -537.91907
},
{
frequency: 1968.3273,
RX: undefined,
IM3: -322.71588,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1968.5413,
RX: undefined,
IM3: undefined,
IM5: -401.42422,
IM7: undefined,
IM9: undefined
},
{
frequency: 1968.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.76163,
IM9: -537.92993
},
{
frequency: 1968.8273,
RX: undefined,
IM3: -323.1368,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1969.0413,
RX: undefined,
IM3: undefined,
IM5: -401.76956,
IM7: undefined,
IM9: undefined
},
{
frequency: 1969.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.77237,
IM9: -537.935
},
{
frequency: 1969.3273,
RX: undefined,
IM3: -323.57446,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1969.5413,
RX: undefined,
IM3: undefined,
IM5: -402.09607,
IM7: undefined,
IM9: undefined
},
{
frequency: 1969.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.77396,
IM9: -537.9375
},
{
frequency: 1969.8273,
RX: undefined,
IM3: -324.02853,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1970.0413,
RX: undefined,
IM3: undefined,
IM5: -402.3525,
IM7: undefined,
IM9: undefined
},
{
frequency: 1970.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.76465,
IM9: -537.9296
},
{
frequency: 1970.3273,
RX: undefined,
IM3: -324.5322,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1970.5413,
RX: undefined,
IM3: undefined,
IM5: -402.59894,
IM7: undefined,
IM9: undefined
},
{
frequency: 1970.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.75482,
IM9: -537.92993
},
{
frequency: 1970.8273,
RX: undefined,
IM3: -325.02618,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1971.0413,
RX: undefined,
IM3: undefined,
IM5: -402.79517,
IM7: undefined,
IM9: undefined
},
{
frequency: 1971.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.7438,
IM9: -537.92535
},
{
frequency: 1971.3273,
RX: undefined,
IM3: -325.50418,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1971.5413,
RX: undefined,
IM3: undefined,
IM5: -402.97467,
IM7: undefined,
IM9: undefined
},
{
frequency: 1971.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.73358,
IM9: -537.9282
},
{
frequency: 1971.8273,
RX: undefined,
IM3: -325.9565,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1972.0413,
RX: undefined,
IM3: undefined,
IM5: -403.098,
IM7: undefined,
IM9: undefined
},
{
frequency: 1972.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.73395,
IM9: -537.9339
},
{
frequency: 1972.3273,
RX: undefined,
IM3: -326.33804,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1972.5413,
RX: undefined,
IM3: undefined,
IM5: -403.22324,
IM7: undefined,
IM9: undefined
},
{
frequency: 1972.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.73874,
IM9: -537.942
},
{
frequency: 1972.8273,
RX: undefined,
IM3: -326.71506,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1973.0413,
RX: undefined,
IM3: undefined,
IM5: -403.32486,
IM7: undefined,
IM9: undefined
},
{
frequency: 1973.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.77704,
IM9: -537.9565
},
{
frequency: 1973.3273,
RX: undefined,
IM3: -327.0886,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1973.5413,
RX: undefined,
IM3: undefined,
IM5: -403.41907,
IM7: undefined,
IM9: undefined
},
{
frequency: 1973.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.80423,
IM9: -537.9673
},
{
frequency: 1973.8273,
RX: undefined,
IM3: -327.4929,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1974.0413,
RX: undefined,
IM3: undefined,
IM5: -403.54202,
IM7: undefined,
IM9: undefined
},
{
frequency: 1974.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.86456,
IM9: -537.9874
},
{
frequency: 1974.3273,
RX: undefined,
IM3: -327.89343,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1974.5413,
RX: undefined,
IM3: undefined,
IM5: -403.64346,
IM7: undefined,
IM9: undefined
},
{
frequency: 1974.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.9351,
IM9: -538.0194
},
{
frequency: 1974.8273,
RX: undefined,
IM3: -328.22314,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1975.0413,
RX: undefined,
IM3: undefined,
IM5: -403.7704,
IM7: undefined,
IM9: undefined
},
{
frequency: 1975.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.03973,
IM9: -538.0622
},
{
frequency: 1975.3273,
RX: undefined,
IM3: -328.44858,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1975.5413,
RX: undefined,
IM3: undefined,
IM5: -403.92545,
IM7: undefined,
IM9: undefined
},
{
frequency: 1975.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.15875,
IM9: -538.1058
},
{
frequency: 1975.8273,
RX: undefined,
IM3: -328.5038,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1976.0413,
RX: undefined,
IM3: undefined,
IM5: -404.11954,
IM7: undefined,
IM9: undefined
},
{
frequency: 1976.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.30463,
IM9: -538.1523
},
{
frequency: 1976.3273,
RX: undefined,
IM3: -328.4474,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1976.5413,
RX: undefined,
IM3: undefined,
IM5: -404.35263,
IM7: undefined,
IM9: undefined
},
{
frequency: 1976.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.47787,
IM9: -538.2092
},
{
frequency: 1976.8273,
RX: undefined,
IM3: -328.35648,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1977.0413,
RX: undefined,
IM3: undefined,
IM5: -404.64297,
IM7: undefined,
IM9: undefined
},
{
frequency: 1977.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.67548,
IM9: -538.2703
},
{
frequency: 1977.3273,
RX: undefined,
IM3: -328.17453,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1977.5413,
RX: undefined,
IM3: undefined,
IM5: -404.9616,
IM7: undefined,
IM9: undefined
},
{
frequency: 1977.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.9018,
IM9: -538.3339
},
{
frequency: 1977.8273,
RX: undefined,
IM3: -327.92688,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1978.0413,
RX: undefined,
IM3: undefined,
IM5: -405.35126,
IM7: undefined,
IM9: undefined
},
{
frequency: 1978.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -472.131,
IM9: -538.4101
},
{
frequency: 1978.3273,
RX: undefined,
IM3: -327.68857,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1978.5413,
RX: undefined,
IM3: undefined,
IM5: -405.79822,
IM7: undefined,
IM9: undefined
},
{
frequency: 1978.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -472.38388,
IM9: -538.4793
},
{
frequency: 1978.8273,
RX: undefined,
IM3: -327.4392,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1979.0083,
RX: undefined,
IM3: undefined,
IM5: -406.30386,
IM7: undefined,
IM9: undefined
},
{
frequency: 1979.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -472.67117,
IM9: -538.5458
},
{
frequency: 1979.3273,
RX: undefined,
IM3: -327.2127,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1979.4222,
RX: undefined,
IM3: undefined,
IM5: -406.8065,
IM7: undefined,
IM9: undefined
},
{
frequency: 1979.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -472.9446,
IM9: -538.6235
},
{
frequency: 1979.8182,
RX: undefined,
IM3: undefined,
IM5: -407.31598,
IM7: undefined,
IM9: undefined
},
{
frequency: 1979.8273,
RX: undefined,
IM3: -327.03946,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1980.1843,
RX: undefined,
IM3: undefined,
IM5: -407.82065,
IM7: undefined,
IM9: undefined
},
{
frequency: 1980.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -473.2402,
IM9: -538.6876
},
{
frequency: 1980.3273,
RX: undefined,
IM3: -326.89343,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1980.5162,
RX: undefined,
IM3: undefined,
IM5: -408.32388,
IM7: undefined,
IM9: undefined
},
{
frequency: 1980.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -473.51868,
IM9: -538.7531
},
{
frequency: 1980.8273,
RX: undefined,
IM3: -326.81863,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1980.8333,
RX: undefined,
IM3: undefined,
IM5: -408.83344,
IM7: undefined,
IM9: undefined
},
{
frequency: 1981.1433,
RX: undefined,
IM3: undefined,
IM5: -409.33508,
IM7: undefined,
IM9: undefined
},
{
frequency: 1981.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -473.7806,
IM9: -538.8128
},
{
frequency: 1981.3273,
RX: undefined,
IM3: -326.80832,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1981.4353,
RX: undefined,
IM3: undefined,
IM5: -409.836,
IM7: undefined,
IM9: undefined
},
{
frequency: 1981.7402,
RX: undefined,
IM3: undefined,
IM5: -410.33786,
IM7: undefined,
IM9: undefined
},
{
frequency: 1981.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -474.03583,
IM9: -538.86676
},
{
frequency: 1981.8273,
RX: undefined,
IM3: -326.80075,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1982.0522,
RX: undefined,
IM3: undefined,
IM5: -410.8568,
IM7: undefined,
IM9: undefined
},
{
frequency: 1982.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -474.22388,
IM9: -538.9175
},
{
frequency: 1982.3273,
RX: undefined,
IM3: -326.8381,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1982.3983,
RX: undefined,
IM3: undefined,
IM5: -411.3596,
IM7: undefined,
IM9: undefined
},
{
frequency: 1982.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -474.37714,
IM9: -538.9462
},
{
frequency: 1982.8273,
RX: undefined,
IM3: -326.94876,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1982.8323,
RX: undefined,
IM3: undefined,
IM5: -411.86316,
IM7: undefined,
IM9: undefined
},
{
frequency: 1983.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -474.47586,
IM9: -538.97284
},
{
frequency: 1983.3273,
RX: undefined,
IM3: -327.06668,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1983.3323,
RX: undefined,
IM3: undefined,
IM5: -412.1276,
IM7: undefined,
IM9: undefined
},
{
frequency: 1983.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -474.49548,
IM9: -538.9804
},
{
frequency: 1983.8273,
RX: undefined,
IM3: -327.13998,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1983.8323,
RX: undefined,
IM3: undefined,
IM5: -412.02835,
IM7: undefined,
IM9: undefined
},
{
frequency: 1984.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -474.47778,
IM9: -538.99304
},
{
frequency: 1984.3273,
RX: undefined,
IM3: -327.1675,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1984.3323,
RX: undefined,
IM3: undefined,
IM5: -411.6144,
IM7: undefined,
IM9: undefined
},
{
frequency: 1984.6813,
RX: undefined,
IM3: undefined,
IM5: -411.11398,
IM7: undefined,
IM9: undefined
},
{
frequency: 1984.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -474.36404,
IM9: -538.98016
},
{
frequency: 1984.8273,
RX: undefined,
IM3: -327.11044,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1985.0193,
RX: undefined,
IM3: undefined,
IM5: -410.5936,
IM7: undefined,
IM9: undefined
},
{
frequency: 1985.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -474.1987,
IM9: -538.9614
},
{
frequency: 1985.3173,
RX: undefined,
IM3: undefined,
IM5: -410.09344,
IM7: undefined,
IM9: undefined
},
{
frequency: 1985.3273,
RX: undefined,
IM3: -327.0393,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1985.6152,
RX: undefined,
IM3: undefined,
IM5: -409.58154,
IM7: undefined,
IM9: undefined
},
{
frequency: 1985.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -473.99643,
IM9: -538.9315
},
{
frequency: 1985.8273,
RX: undefined,
IM3: -327.00003,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1985.9172,
RX: undefined,
IM3: undefined,
IM5: -409.06406,
IM7: undefined,
IM9: undefined
},
{
frequency: 1986.2302,
RX: undefined,
IM3: undefined,
IM5: -408.5626,
IM7: undefined,
IM9: undefined
},
{
frequency: 1986.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -473.7581,
IM9: -538.8914
},
{
frequency: 1986.3273,
RX: undefined,
IM3: -327.0268,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1986.5443,
RX: undefined,
IM3: undefined,
IM5: -408.06134,
IM7: undefined,
IM9: undefined
},
{
frequency: 1986.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -473.48218,
IM9: -538.84717
},
{
frequency: 1986.8273,
RX: undefined,
IM3: -327.102,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1986.8602,
RX: undefined,
IM3: undefined,
IM5: -407.5582,
IM7: undefined,
IM9: undefined
},
{
frequency: 1987.2213,
RX: undefined,
IM3: undefined,
IM5: -407.05673,
IM7: undefined,
IM9: undefined
},
{
frequency: 1987.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -473.2128,
IM9: -538.798
},
{
frequency: 1987.3273,
RX: undefined,
IM3: -327.20108,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1987.6023,
RX: undefined,
IM3: undefined,
IM5: -406.55188,
IM7: undefined,
IM9: undefined
},
{
frequency: 1987.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -472.93793,
IM9: -538.7384
},
{
frequency: 1987.8273,
RX: undefined,
IM3: -327.3648,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1988.0272,
RX: undefined,
IM3: undefined,
IM5: -406.03842,
IM7: undefined,
IM9: undefined
},
{
frequency: 1988.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -472.6467,
IM9: -538.68036
},
{
frequency: 1988.3273,
RX: undefined,
IM3: -327.55975,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1988.5023,
RX: undefined,
IM3: undefined,
IM5: -405.5325,
IM7: undefined,
IM9: undefined
},
{
frequency: 1988.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -472.38074,
IM9: -538.6182
},
{
frequency: 1988.8273,
RX: undefined,
IM3: -327.80832,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1989.0023,
RX: undefined,
IM3: undefined,
IM5: -405.1061,
IM7: undefined,
IM9: undefined
},
{
frequency: 1989.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -472.1311,
IM9: -538.55865
},
{
frequency: 1989.3273,
RX: undefined,
IM3: -328.09998,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1989.5023,
RX: undefined,
IM3: undefined,
IM5: -404.67657,
IM7: undefined,
IM9: undefined
},
{
frequency: 1989.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.89694,
IM9: -538.49554
},
{
frequency: 1989.8273,
RX: undefined,
IM3: -328.43982,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1990.0023,
RX: undefined,
IM3: undefined,
IM5: -404.35876,
IM7: undefined,
IM9: undefined
},
{
frequency: 1990.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.6919,
IM9: -538.4541
},
{
frequency: 1990.3273,
RX: undefined,
IM3: -328.7911,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1990.5023,
RX: undefined,
IM3: undefined,
IM5: -404.09543,
IM7: undefined,
IM9: undefined
},
{
frequency: 1990.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.5071,
IM9: -538.401
},
{
frequency: 1990.8273,
RX: undefined,
IM3: -329.10745,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1991.0023,
RX: undefined,
IM3: undefined,
IM5: -403.88293,
IM7: undefined,
IM9: undefined
},
{
frequency: 1991.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.34406,
IM9: -538.35754
},
{
frequency: 1991.3273,
RX: undefined,
IM3: -329.33023,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1991.5023,
RX: undefined,
IM3: undefined,
IM5: -403.69055,
IM7: undefined,
IM9: undefined
},
{
frequency: 1991.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.21695,
IM9: -538.3196
},
{
frequency: 1991.8273,
RX: undefined,
IM3: -329.4606,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1992.0023,
RX: undefined,
IM3: undefined,
IM5: -403.6018,
IM7: undefined,
IM9: undefined
},
{
frequency: 1992.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.1078,
IM9: -538.2794
},
{
frequency: 1992.3273,
RX: undefined,
IM3: -329.4913,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1992.5023,
RX: undefined,
IM3: undefined,
IM5: -403.5027,
IM7: undefined,
IM9: undefined
},
{
frequency: 1992.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.01498,
IM9: -538.261
},
{
frequency: 1992.8273,
RX: undefined,
IM3: -329.35254,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1993.0023,
RX: undefined,
IM3: undefined,
IM5: -403.45932,
IM7: undefined,
IM9: undefined
},
{
frequency: 1993.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.96994,
IM9: -538.2436
},
{
frequency: 1993.3273,
RX: undefined,
IM3: -329.0184,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1993.5023,
RX: undefined,
IM3: undefined,
IM5: -403.43472,
IM7: undefined,
IM9: undefined
},
{
frequency: 1993.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.92502,
IM9: -538.22925
},
{
frequency: 1993.8273,
RX: undefined,
IM3: -328.55862,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1994.0023,
RX: undefined,
IM3: undefined,
IM5: -403.4039,
IM7: undefined,
IM9: undefined
},
{
frequency: 1994.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.90454,
IM9: -538.22864
},
{
frequency: 1994.3273,
RX: undefined,
IM3: -328.08124,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1994.5023,
RX: undefined,
IM3: undefined,
IM5: -403.41092,
IM7: undefined,
IM9: undefined
},
{
frequency: 1994.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.90036,
IM9: -538.22687
},
{
frequency: 1994.8273,
RX: undefined,
IM3: -327.5996,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1995.0023,
RX: undefined,
IM3: undefined,
IM5: -403.41336,
IM7: undefined,
IM9: undefined
},
{
frequency: 1995.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.91736,
IM9: -538.2178
},
{
frequency: 1995.3273,
RX: undefined,
IM3: -327.14355,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1995.5023,
RX: undefined,
IM3: undefined,
IM5: -403.40936,
IM7: undefined,
IM9: undefined
},
{
frequency: 1995.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.9443,
IM9: -538.24286
},
{
frequency: 1995.8273,
RX: undefined,
IM3: -326.67618,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1996.0023,
RX: undefined,
IM3: undefined,
IM5: -403.3872,
IM7: undefined,
IM9: undefined
},
{
frequency: 1996.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.98755,
IM9: -538.24585
},
{
frequency: 1996.3173,
RX: undefined,
IM3: -326.16608,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1996.5023,
RX: undefined,
IM3: undefined,
IM5: -403.32568,
IM7: undefined,
IM9: undefined
},
{
frequency: 1996.7703,
RX: undefined,
IM3: -325.65967,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1996.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.02432,
IM9: -538.2598
},
{
frequency: 1997.0023,
RX: undefined,
IM3: undefined,
IM5: -403.21588,
IM7: undefined,
IM9: undefined
},
{
frequency: 1997.2013,
RX: undefined,
IM3: -325.15594,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1997.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.0747,
IM9: -538.27893
},
{
frequency: 1997.5023,
RX: undefined,
IM3: undefined,
IM5: -403.04733,
IM7: undefined,
IM9: undefined
},
{
frequency: 1997.6202,
RX: undefined,
IM3: -324.65555,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1997.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.11887,
IM9: -538.29535
},
{
frequency: 1998.0023,
RX: undefined,
IM3: undefined,
IM5: -402.85376,
IM7: undefined,
IM9: undefined
},
{
frequency: 1998.0553,
RX: undefined,
IM3: -324.15503,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1998.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.15585,
IM9: -538.3022
},
{
frequency: 1998.5023,
RX: undefined,
IM3: undefined,
IM5: -402.5788,
IM7: undefined,
IM9: undefined
},
{
frequency: 1998.5483,
RX: undefined,
IM3: -323.65222,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1998.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.17178,
IM9: -538.3086
},
{
frequency: 1999.0023,
RX: undefined,
IM3: undefined,
IM5: -402.27783,
IM7: undefined,
IM9: undefined
},
{
frequency: 1999.0483,
RX: undefined,
IM3: -323.16852,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1999.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.17746,
IM9: -538.3134
},
{
frequency: 1999.5023,
RX: undefined,
IM3: undefined,
IM5: -401.90906,
IM7: undefined,
IM9: undefined
},
{
frequency: 1999.5483,
RX: undefined,
IM3: -322.71265,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 1999.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.1626,
IM9: -538.30817
},
{
frequency: 2000.0023,
RX: undefined,
IM3: undefined,
IM5: -401.51785,
IM7: undefined,
IM9: undefined
},
{
frequency: 2000.0483,
RX: undefined,
IM3: -322.29413,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2000.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.12396,
IM9: -538.29456
},
{
frequency: 2000.5023,
RX: undefined,
IM3: undefined,
IM5: -401.1058,
IM7: undefined,
IM9: undefined
},
{
frequency: 2000.5483,
RX: undefined,
IM3: -321.91602,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2000.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -471.07266,
IM9: -538.27966
},
{
frequency: 2001.0023,
RX: undefined,
IM3: undefined,
IM5: -400.66495,
IM7: undefined,
IM9: undefined
},
{
frequency: 2001.0483,
RX: undefined,
IM3: -321.57077,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2001.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.97775,
IM9: -538.24634
},
{
frequency: 2001.5023,
RX: undefined,
IM3: undefined,
IM5: -400.21652,
IM7: undefined,
IM9: undefined
},
{
frequency: 2001.5483,
RX: undefined,
IM3: -321.2477,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2001.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.8501,
IM9: -538.205
},
{
frequency: 2002.0023,
RX: undefined,
IM3: undefined,
IM5: -399.78262,
IM7: undefined,
IM9: undefined
},
{
frequency: 2002.0483,
RX: undefined,
IM3: -320.94415,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2002.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.72153,
IM9: -538.16187
},
{
frequency: 2002.5023,
RX: undefined,
IM3: undefined,
IM5: -399.34265,
IM7: undefined,
IM9: undefined
},
{
frequency: 2002.5483,
RX: undefined,
IM3: -320.6494,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2002.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.56036,
IM9: -538.0639
},
{
frequency: 2003.0023,
RX: undefined,
IM3: undefined,
IM5: -398.91656,
IM7: undefined,
IM9: undefined
},
{
frequency: 2003.0483,
RX: undefined,
IM3: -320.3683,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2003.0913,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -537.56195
},
{
frequency: 2003.1913,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -537.05914
},
{
frequency: 2003.2573,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -536.55817
},
{
frequency: 2003.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.38666,
IM9: undefined
},
{
frequency: 2003.3083,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -536.056
},
{
frequency: 2003.3503,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -535.5454
},
{
frequency: 2003.3864,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -535.0449
},
{
frequency: 2003.4183,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -534.5407
},
{
frequency: 2003.4484,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -534.0237
},
{
frequency: 2003.4753,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -533.5169
},
{
frequency: 2003.5013,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -532.99615
},
{
frequency: 2003.5023,
RX: undefined,
IM3: undefined,
IM5: -398.50934,
IM7: undefined,
IM9: undefined
},
{
frequency: 2003.5253,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -532.48694
},
{
frequency: 2003.5483,
RX: undefined,
IM3: -320.11267,
IM5: undefined,
IM7: undefined,
IM9: -531.9731
},
{
frequency: 2003.5703,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -531.45807
},
{
frequency: 2003.5913,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -530.9465
},
{
frequency: 2003.6113,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -530.44366
},
{
frequency: 2003.6313,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -529.92993
},
{
frequency: 2003.6503,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -529.4241
},
{
frequency: 2003.6693,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -528.90784
},
{
frequency: 2003.6884,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -528.38074
},
{
frequency: 2003.7063,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -527.8729
},
{
frequency: 2003.7244,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -527.3597
},
{
frequency: 2003.7423,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -526.8352
},
{
frequency: 2003.7603,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -526.30634
},
{
frequency: 2003.7773,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -525.7998
},
{
frequency: 2003.7943,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -525.2951
},
{
frequency: 2003.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.2005,
IM9: undefined
},
{
frequency: 2003.8113,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -524.7814
},
{
frequency: 2003.8282,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -524.26434
},
{
frequency: 2003.8453,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -523.7453
},
{
frequency: 2003.8623,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -523.22253
},
{
frequency: 2003.8793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -522.69867
},
{
frequency: 2003.8964,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -522.17316
},
{
frequency: 2003.9133,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -521.6462
},
{
frequency: 2003.9303,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -521.11865
},
{
frequency: 2003.9473,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -520.59216
},
{
frequency: 2003.9644,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -520.06366
},
{
frequency: 2003.9813,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -519.5357
},
{
frequency: 2003.9983,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -519.0079
},
{
frequency: 2004.0023,
RX: undefined,
IM3: undefined,
IM5: -398.11346,
IM7: undefined,
IM9: undefined
},
{
frequency: 2004.0153,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -518.4813
},
{
frequency: 2004.0323,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -517.95605
},
{
frequency: 2004.0483,
RX: undefined,
IM3: -319.8711,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2004.0493,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -517.43085
},
{
frequency: 2004.0663,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -516.9063
},
{
frequency: 2004.0833,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -516.38477
},
{
frequency: 2004.1003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -515.8647
},
{
frequency: 2004.1173,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -515.3454
},
{
frequency: 2004.1343,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -514.8284
},
{
frequency: 2004.1512,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -514.3129
},
{
frequency: 2004.1683,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -513.80023
},
{
frequency: 2004.1853,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -513.289
},
{
frequency: 2004.2023,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -512.77997
},
{
frequency: 2004.2194,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -512.2736
},
{
frequency: 2004.2363,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -511.76978
},
{
frequency: 2004.2533,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -511.26837
},
{
frequency: 2004.2714,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -510.73953
},
{
frequency: 2004.2893,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -510.21393
},
{
frequency: 2004.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -470.00214,
IM9: undefined
},
{
frequency: 2004.3073,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -509.6907
},
{
frequency: 2004.3253,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -509.17087
},
{
frequency: 2004.3433,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -508.65378
},
{
frequency: 2004.3613,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -508.1399
},
{
frequency: 2004.3793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -507.62863
},
{
frequency: 2004.3973,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -507.12045
},
{
frequency: 2004.4153,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -506.61533
},
{
frequency: 2004.4333,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -506.11295
},
{
frequency: 2004.4523,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -505.5862
},
{
frequency: 2004.4713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -505.0627
},
{
frequency: 2004.4904,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -504.54233
},
{
frequency: 2004.5023,
RX: undefined,
IM3: undefined,
IM5: -397.74637,
IM7: undefined,
IM9: undefined
},
{
frequency: 2004.5093,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -504.02567
},
{
frequency: 2004.5283,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -503.5119
},
{
frequency: 2004.5474,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -503.00174
},
{
frequency: 2004.5483,
RX: undefined,
IM3: -319.6473,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2004.5663,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -502.49472
},
{
frequency: 2004.5853,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -501.991
},
{
frequency: 2004.6042,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -501.49054
},
{
frequency: 2004.6243,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -500.96722
},
{
frequency: 2004.6443,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -500.4475
},
{
frequency: 2004.6643,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -499.93115
},
{
frequency: 2004.6843,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -499.4183
},
{
frequency: 2004.7043,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -498.9091
},
{
frequency: 2004.7244,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -498.40332
},
{
frequency: 2004.7443,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -497.9008
},
{
frequency: 2004.7653,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -497.3769
},
{
frequency: 2004.7863,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -496.85657
},
{
frequency: 2004.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.80292,
IM9: undefined
},
{
frequency: 2004.8073,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -496.33997
},
{
frequency: 2004.8282,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -495.82684
},
{
frequency: 2004.8494,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -495.31747
},
{
frequency: 2004.8704,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -494.81155
},
{
frequency: 2004.8914,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -494.30914
},
{
frequency: 2004.9133,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -493.78647
},
{
frequency: 2004.9353,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -493.26755
},
{
frequency: 2004.9573,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -492.75235
},
{
frequency: 2004.9792,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -492.24078
},
{
frequency: 2005.0013,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -491.73288
},
{
frequency: 2005.0023,
RX: undefined,
IM3: undefined,
IM5: -397.38922,
IM7: undefined,
IM9: undefined
},
{
frequency: 2005.0233,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -491.2285
},
{
frequency: 2005.0453,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -490.72763
},
{
frequency: 2005.0483,
RX: undefined,
IM3: -319.41904,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2005.0684,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -490.2077
},
{
frequency: 2005.0913,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -489.69165
},
{
frequency: 2005.1143,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -489.1792
},
{
frequency: 2005.1373,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -488.67044
},
{
frequency: 2005.1603,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -488.1653
},
{
frequency: 2005.1833,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -487.66373
},
{
frequency: 2005.2073,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -487.14407
},
{
frequency: 2005.2313,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -486.62827
},
{
frequency: 2005.2552,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -486.11618
},
{
frequency: 2005.2793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -485.60773
},
{
frequency: 2005.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.59378,
IM9: undefined
},
{
frequency: 2005.3033,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -485.10294
},
{
frequency: 2005.3273,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -484.60175
},
{
frequency: 2005.3523,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -484.08344
},
{
frequency: 2005.3773,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -483.5689
},
{
frequency: 2005.4023,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -483.0581
},
{
frequency: 2005.4274,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -482.551
},
{
frequency: 2005.4523,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -482.0475
},
{
frequency: 2005.4783,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -481.52768
},
{
frequency: 2005.5023,
RX: undefined,
IM3: undefined,
IM5: -397.0614,
IM7: undefined,
IM9: undefined
},
{
frequency: 2005.5043,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -481.0117
},
{
frequency: 2005.5303,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -480.49945
},
{
frequency: 2005.5483,
RX: undefined,
IM3: -319.20407,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2005.5563,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -479.99094
},
{
frequency: 2005.5823,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -479.48608
},
{
frequency: 2005.6083,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -478.98486
},
{
frequency: 2005.6353,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -478.4681
},
{
frequency: 2005.6624,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -477.95514
},
{
frequency: 2005.6893,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -477.44592
},
{
frequency: 2005.7163,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -476.9404
},
{
frequency: 2005.7433,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -476.43848
},
{
frequency: 2005.7714,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -475.92178
},
{
frequency: 2005.7993,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -475.40884
},
{
frequency: 2005.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.40512,
IM9: undefined
},
{
frequency: 2005.8273,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -474.89966
},
{
frequency: 2005.8553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -474.39417
},
{
frequency: 2005.8833,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -473.8923
},
{
frequency: 2005.9124,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -473.37628
},
{
frequency: 2005.9413,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -472.86407
},
{
frequency: 2005.9703,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -472.3556
},
{
frequency: 2005.9993,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -471.8508
},
{
frequency: 2006.0023,
RX: undefined,
IM3: undefined,
IM5: -396.76514,
IM7: undefined,
IM9: undefined
},
{
frequency: 2006.0283,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -471.3496
},
{
frequency: 2006.0483,
RX: undefined,
IM3: -318.9908,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2006.0583,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -470.83493
},
{
frequency: 2006.0883,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -470.324
},
{
frequency: 2006.1183,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -469.8168
},
{
frequency: 2006.1483,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -469.31326
},
{
frequency: 2006.1793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -468.79675
},
{
frequency: 2006.2103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -468.28403
},
{
frequency: 2006.2413,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -467.77505
},
{
frequency: 2006.2723,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -467.26978
},
{
frequency: 2006.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.22092,
IM9: undefined
},
{
frequency: 2006.3033,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -466.76816
},
{
frequency: 2006.3353,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -466.2541
},
{
frequency: 2006.3673,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -465.7438
},
{
frequency: 2006.3993,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -465.23724
},
{
frequency: 2006.4313,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -464.7343
},
{
frequency: 2006.4644,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -464.21948
},
{
frequency: 2006.4973,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -463.7084
},
{
frequency: 2006.5023,
RX: undefined,
IM3: undefined,
IM5: -396.47156,
IM7: undefined,
IM9: undefined
},
{
frequency: 2006.5303,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -463.20105
},
{
frequency: 2006.5483,
RX: undefined,
IM3: -318.78592,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2006.5634,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -462.6974
},
{
frequency: 2006.5963,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -462.19736
},
{
frequency: 2006.6302,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -461.68588
},
{
frequency: 2006.6643,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -461.17813
},
{
frequency: 2006.6984,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -460.67407
},
{
frequency: 2006.7323,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -460.17365
},
{
frequency: 2006.7673,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -459.66223
},
{
frequency: 2006.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.0295,
IM9: undefined
},
{
frequency: 2006.8024,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -459.15457
},
{
frequency: 2006.8373,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -458.65057
},
{
frequency: 2006.8723,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -458.15018
},
{
frequency: 2006.9083,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -457.63925
},
{
frequency: 2006.9443,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -457.13205
},
{
frequency: 2006.9803,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -456.6285
},
{
frequency: 2007.0023,
RX: undefined,
IM3: undefined,
IM5: -396.22632,
IM7: undefined,
IM9: undefined
},
{
frequency: 2007.0173,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -456.11475
},
{
frequency: 2007.0483,
RX: undefined,
IM3: -318.6005,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2007.0543,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -455.60477
},
{
frequency: 2007.0913,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -455.09848
},
{
frequency: 2007.1283,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -454.59586
},
{
frequency: 2007.1663,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -454.08344
},
{
frequency: 2007.2043,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -453.57474
},
{
frequency: 2007.2423,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -453.06973
},
{
frequency: 2007.2803,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -452.5684
},
{
frequency: 2007.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.8534,
IM9: undefined
},
{
frequency: 2007.3193,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -452.05756
},
{
frequency: 2007.3583,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -451.55048
},
{
frequency: 2007.3973,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -451.04706
},
{
frequency: 2007.4373,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -450.53452
},
{
frequency: 2007.4773,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -450.0257
},
{
frequency: 2007.5023,
RX: undefined,
IM3: undefined,
IM5: -395.99664,
IM7: undefined,
IM9: undefined
},
{
frequency: 2007.5173,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -449.52057
},
{
frequency: 2007.5483,
RX: undefined,
IM3: -318.45737,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2007.5573,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -449.0191
},
{
frequency: 2007.5983,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -448.50882
},
{
frequency: 2007.6393,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -448.00226
},
{
frequency: 2007.6803,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -447.49936
},
{
frequency: 2007.7223,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -446.98795
},
{
frequency: 2007.7643,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -446.4803
},
{
frequency: 2007.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.69363,
IM9: undefined
},
{
frequency: 2007.8063,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -445.9763
},
{
frequency: 2007.8483,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -445.47592
},
{
frequency: 2007.8914,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -444.96732
},
{
frequency: 2007.9343,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -444.46243
},
{
frequency: 2007.9773,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -443.9612
},
{
frequency: 2008.0023,
RX: undefined,
IM3: undefined,
IM5: -395.79544,
IM7: undefined,
IM9: undefined
},
{
frequency: 2008.0214,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -443.45203
},
{
frequency: 2008.0483,
RX: undefined,
IM3: -318.37036,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2008.0653,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -442.94653
},
{
frequency: 2008.1093,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -442.4447
},
{
frequency: 2008.1543,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -441.9352
},
{
frequency: 2008.1993,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -441.42938
},
{
frequency: 2008.2443,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -440.92725
},
{
frequency: 2008.2903,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -440.41766
},
{
frequency: 2008.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.5622,
IM9: undefined
},
{
frequency: 2008.3363,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -439.91177
},
{
frequency: 2008.3823,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -439.40958
},
{
frequency: 2008.4293,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -438.90015
},
{
frequency: 2008.4763,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -438.39444
},
{
frequency: 2008.5023,
RX: undefined,
IM3: undefined,
IM5: -395.628,
IM7: undefined,
IM9: undefined
},
{
frequency: 2008.5233,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -437.89236
},
{
frequency: 2008.5483,
RX: undefined,
IM3: -318.30643,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2008.5713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -437.38336
},
{
frequency: 2008.6193,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -436.87802
},
{
frequency: 2008.6674,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -436.37637
},
{
frequency: 2008.7163,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -435.86795
},
{
frequency: 2008.7653,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -435.36322
},
{
frequency: 2008.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.4446,
IM9: undefined
},
{
frequency: 2008.8143,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -434.86215
},
{
frequency: 2008.8643,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -434.35452
},
{
frequency: 2008.9143,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -433.8506
},
{
frequency: 2008.9644,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -433.3503
},
{
frequency: 2009.0023,
RX: undefined,
IM3: undefined,
IM5: -395.4752,
IM7: undefined,
IM9: undefined
},
{
frequency: 2009.0153,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -432.84366
},
{
frequency: 2009.0483,
RX: undefined,
IM3: -318.259,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2009.0663,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -432.34073
},
{
frequency: 2009.1183,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -431.8316
},
{
frequency: 2009.1703,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -431.32623
},
{
frequency: 2009.2223,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -430.82446
},
{
frequency: 2009.2753,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -430.31677
},
{
frequency: 2009.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.34012,
IM9: undefined
},
{
frequency: 2009.3284,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -429.81277
},
{
frequency: 2009.3813,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -429.31238
},
{
frequency: 2009.4353,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -428.80624
},
{
frequency: 2009.4893,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -428.30374
},
{
frequency: 2009.5023,
RX: undefined,
IM3: undefined,
IM5: -395.35754,
IM7: undefined,
IM9: undefined
},
{
frequency: 2009.5443,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -427.7957
},
{
frequency: 2009.5483,
RX: undefined,
IM3: -318.2314,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2009.5994,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -427.2913
},
{
frequency: 2009.6543,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -426.79053
},
{
frequency: 2009.7103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -426.28433
},
{
frequency: 2009.7664,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -425.7818
},
{
frequency: 2009.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.25067,
IM9: undefined
},
{
frequency: 2009.8234,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -425.27402
},
{
frequency: 2009.8804,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -424.7699
},
{
frequency: 2009.9373,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -424.26944
},
{
frequency: 2009.9954,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -423.76385
},
{
frequency: 2010.0023,
RX: undefined,
IM3: undefined,
IM5: -395.2641,
IM7: undefined,
IM9: undefined
},
{
frequency: 2010.0483,
RX: undefined,
IM3: -318.21097,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2010.0533,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -423.2619
},
{
frequency: 2010.1123,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -422.75504
},
{
frequency: 2010.1713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -422.2518
},
{
frequency: 2010.2313,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -421.74377
},
{
frequency: 2010.2913,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -421.2394
},
{
frequency: 2010.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.1912,
IM9: undefined
},
{
frequency: 2010.3513,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -420.73868
},
{
frequency: 2010.4124,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -420.2333
},
{
frequency: 2010.4733,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -419.73154
},
{
frequency: 2010.5023,
RX: undefined,
IM3: undefined,
IM5: -395.1851,
IM7: undefined,
IM9: undefined
},
{
frequency: 2010.5353,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -419.22528
},
{
frequency: 2010.5483,
RX: undefined,
IM3: -318.19565,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2010.5973,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -418.72266
},
{
frequency: 2010.6603,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -418.2156
},
{
frequency: 2010.7233,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -417.71225
},
{
frequency: 2010.7874,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -417.20462
},
{
frequency: 2010.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.1439,
IM9: undefined
},
{
frequency: 2010.8513,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -416.70065
},
{
frequency: 2010.9153,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -416.20032
},
{
frequency: 2010.9803,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -415.69583
},
{
frequency: 2011.0023,
RX: undefined,
IM3: undefined,
IM5: -395.14035,
IM7: undefined,
IM9: undefined
},
{
frequency: 2011.0453,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -415.19498
},
{
frequency: 2011.0483,
RX: undefined,
IM3: -318.17386,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2011.1113,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -414.6901
},
{
frequency: 2011.1774,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -414.18884
},
{
frequency: 2011.2443,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -413.6837
},
{
frequency: 2011.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.1198,
IM9: undefined
},
{
frequency: 2011.3113,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -413.18216
},
{
frequency: 2011.3793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -412.67682
},
{
frequency: 2011.4473,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -412.17514
},
{
frequency: 2011.5023,
RX: undefined,
IM3: undefined,
IM5: -395.11887,
IM7: undefined,
IM9: undefined
},
{
frequency: 2011.5164,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -411.66974
},
{
frequency: 2011.5483,
RX: undefined,
IM3: -318.14688,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2011.5853,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -411.168
},
{
frequency: 2011.6553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -410.66266
},
{
frequency: 2011.7253,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -410.16098
},
{
frequency: 2011.7963,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -409.6558
},
{
frequency: 2011.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.1186,
IM9: undefined
},
{
frequency: 2011.8673,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -409.15427
},
{
frequency: 2011.9393,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -408.64932
},
{
frequency: 2012.0023,
RX: undefined,
IM3: undefined,
IM5: -395.11978,
IM7: undefined,
IM9: undefined
},
{
frequency: 2012.0114,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -408.14804
},
{
frequency: 2012.0483,
RX: undefined,
IM3: -318.12115,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2012.0844,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -407.64346
},
{
frequency: 2012.1573,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -407.14252
},
{
frequency: 2012.2313,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -406.63837
},
{
frequency: 2012.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.14127,
IM9: undefined
},
{
frequency: 2012.3053,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -406.13785
},
{
frequency: 2012.3804,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -405.63422
},
{
frequency: 2012.4553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -405.13422
},
{
frequency: 2012.5023,
RX: undefined,
IM3: undefined,
IM5: -395.14276,
IM7: undefined,
IM9: undefined
},
{
frequency: 2012.5314,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -404.6312
},
{
frequency: 2012.5483,
RX: undefined,
IM3: -318.0961,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2012.6083,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -404.1252
},
{
frequency: 2012.6853,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -403.62292
},
{
frequency: 2012.7633,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -403.11777
},
{
frequency: 2012.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.16544,
IM9: undefined
},
{
frequency: 2012.8413,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -402.61627
},
{
frequency: 2012.9203,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -402.112
},
{
frequency: 2012.9993,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -401.61136
},
{
frequency: 2013.0023,
RX: undefined,
IM3: undefined,
IM5: -395.18222,
IM7: undefined,
IM9: undefined
},
{
frequency: 2013.0483,
RX: undefined,
IM3: -318.06592,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2013.0793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -401.10803
},
{
frequency: 2013.1603,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -400.6021
},
{
frequency: 2013.2413,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -400.09982
},
{
frequency: 2013.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.22427,
IM9: undefined
},
{
frequency: 2013.3234,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -399.59503
},
{
frequency: 2013.4053,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -399.09387
},
{
frequency: 2013.4883,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -398.59024
},
{
frequency: 2013.5023,
RX: undefined,
IM3: undefined,
IM5: -395.25043,
IM7: undefined,
IM9: undefined
},
{
frequency: 2013.5483,
RX: undefined,
IM3: -318.03476,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2013.5713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -398.09024
},
{
frequency: 2013.6553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -397.58786
},
{
frequency: 2013.7404,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -397.0832
},
{
frequency: 2013.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.29807,
IM9: undefined
},
{
frequency: 2013.8253,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -396.58212
},
{
frequency: 2013.9114,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -396.07886
},
{
frequency: 2013.9983,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -395.5734
},
{
frequency: 2014.0023,
RX: undefined,
IM3: undefined,
IM5: -395.33755,
IM7: undefined,
IM9: undefined
},
{
frequency: 2014.0483,
RX: undefined,
IM3: -317.99268,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2014.0853,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -395.0716
},
{
frequency: 2014.1733,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -394.5677
},
{
frequency: 2014.2614,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -394.0674
},
{
frequency: 2014.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.38843,
IM9: undefined
},
{
frequency: 2014.3503,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -393.5651
},
{
frequency: 2014.4403,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -393.0608
},
{
frequency: 2014.5023,
RX: undefined,
IM3: undefined,
IM5: -395.45645,
IM7: undefined,
IM9: undefined
},
{
frequency: 2014.5303,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -392.56015
},
{
frequency: 2014.5483,
RX: undefined,
IM3: -317.9557,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2014.6213,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -392.0576
},
{
frequency: 2014.7134,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -391.5532
},
{
frequency: 2014.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.49017,
IM9: undefined
},
{
frequency: 2014.8053,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -391.05246
},
{
frequency: 2014.8983,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -390.54993
},
{
frequency: 2014.9923,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -390.04565
},
{
frequency: 2015.0023,
RX: undefined,
IM3: undefined,
IM5: -395.5916,
IM7: undefined,
IM9: undefined
},
{
frequency: 2015.0483,
RX: undefined,
IM3: -317.94077,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2015.0863,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -389.54504
},
{
frequency: 2015.1813,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -389.0428
},
{
frequency: 2015.2773,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -388.5389
},
{
frequency: 2015.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.61536,
IM9: undefined
},
{
frequency: 2015.3733,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -388.0387
},
{
frequency: 2015.4703,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -387.53696
},
{
frequency: 2015.5023,
RX: undefined,
IM3: undefined,
IM5: -395.7558,
IM7: undefined,
IM9: undefined
},
{
frequency: 2015.5483,
RX: undefined,
IM3: -317.9571,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2015.5684,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -387.03372
},
{
frequency: 2015.6674,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -386.52905
},
{
frequency: 2015.7664,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -386.02808
},
{
frequency: 2015.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.73672,
IM9: undefined
},
{
frequency: 2015.8663,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -385.52573
},
{
frequency: 2015.9673,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -385.02206
},
{
frequency: 2016.0023,
RX: undefined,
IM3: undefined,
IM5: -395.94385,
IM7: undefined,
IM9: undefined
},
{
frequency: 2016.0483,
RX: undefined,
IM3: -317.98752,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2016.0693,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -384.51718
},
{
frequency: 2016.1713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -384.016
},
{
frequency: 2016.2743,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -383.5136
},
{
frequency: 2016.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.87296,
IM9: undefined
},
{
frequency: 2016.3783,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -383.01007
},
{
frequency: 2016.4833,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -382.5055
},
{
frequency: 2016.5023,
RX: undefined,
IM3: undefined,
IM5: -396.16602,
IM7: undefined,
IM9: undefined
},
{
frequency: 2016.5483,
RX: undefined,
IM3: -318.04584,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2016.5884,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -382.0046
},
{
frequency: 2016.6943,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -381.50272
},
{
frequency: 2016.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.00586,
IM9: undefined
},
{
frequency: 2016.8013,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -380.99985
},
{
frequency: 2016.9093,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -380.49606
},
{
frequency: 2017.0023,
RX: undefined,
IM3: undefined,
IM5: -396.40396,
IM7: undefined,
IM9: undefined
},
{
frequency: 2017.0173,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -379.99603
},
{
frequency: 2017.0483,
RX: undefined,
IM3: -318.14426,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2017.1263,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -379.49515
},
{
frequency: 2017.2363,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -378.99344
},
{
frequency: 2017.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.15347,
IM9: undefined
},
{
frequency: 2017.3473,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -378.491
},
{
frequency: 2017.4594,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -377.98785
},
{
frequency: 2017.5023,
RX: undefined,
IM3: undefined,
IM5: -396.67337,
IM7: undefined,
IM9: undefined
},
{
frequency: 2017.5483,
RX: undefined,
IM3: -318.2749,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2017.5724,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -377.48407
},
{
frequency: 2017.6863,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -376.9797
},
{
frequency: 2017.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.294,
IM9: -376.4792
},
{
frequency: 2017.9153,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -375.97812
},
{
frequency: 2018.0023,
RX: undefined,
IM3: undefined,
IM5: -396.96616,
IM7: undefined,
IM9: undefined
},
{
frequency: 2018.0314,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -375.4766
},
{
frequency: 2018.0483,
RX: undefined,
IM3: -318.4204,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2018.1483,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -374.97464
},
{
frequency: 2018.2664,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -374.4723
},
{
frequency: 2018.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.4248,
IM9: undefined
},
{
frequency: 2018.3854,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -373.96964
},
{
frequency: 2018.5023,
RX: undefined,
IM3: undefined,
IM5: -397.27402,
IM7: undefined,
IM9: undefined
},
{
frequency: 2018.5054,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -373.46674
},
{
frequency: 2018.5483,
RX: undefined,
IM3: -318.56866,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2018.6263,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -372.9636
},
{
frequency: 2018.7483,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -372.46033
},
{
frequency: 2018.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.5388,
IM9: undefined
},
{
frequency: 2018.8713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -371.95694
},
{
frequency: 2018.9954,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -371.45352
},
{
frequency: 2019.0023,
RX: undefined,
IM3: undefined,
IM5: -397.61646,
IM7: undefined,
IM9: undefined
},
{
frequency: 2019.0483,
RX: undefined,
IM3: -318.7152,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2019.1204,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -370.9501
},
{
frequency: 2019.2463,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -370.44675
},
{
frequency: 2019.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.63806,
IM9: undefined
},
{
frequency: 2019.3733,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -369.94348
},
{
frequency: 2019.5013,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -369.4404
},
{
frequency: 2019.5023,
RX: undefined,
IM3: undefined,
IM5: -397.9702,
IM7: undefined,
IM9: undefined
},
{
frequency: 2019.5483,
RX: undefined,
IM3: -318.85864,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2019.6304,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -368.93753
},
{
frequency: 2019.7604,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -368.4349
},
{
frequency: 2019.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.71396,
IM9: undefined
},
{
frequency: 2019.8914,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -367.93262
},
{
frequency: 2020.0023,
RX: undefined,
IM3: undefined,
IM5: -398.34106,
IM7: undefined,
IM9: undefined
},
{
frequency: 2020.0233,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -367.4307
},
{
frequency: 2020.0483,
RX: undefined,
IM3: -319.00797,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2020.1564,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -366.9292
},
{
frequency: 2020.2903,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -366.42816
},
{
frequency: 2020.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.7642,
IM9: undefined
},
{
frequency: 2020.4253,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -365.92764
},
{
frequency: 2020.5023,
RX: undefined,
IM3: undefined,
IM5: -398.74164,
IM7: undefined,
IM9: undefined
},
{
frequency: 2020.5483,
RX: undefined,
IM3: -319.16916,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2020.5624,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -365.42404
},
{
frequency: 2020.7003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -364.9211
},
{
frequency: 2020.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.7867,
IM9: undefined
},
{
frequency: 2020.8394,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -364.41895
},
{
frequency: 2020.9794,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -363.9175
},
{
frequency: 2021.0023,
RX: undefined,
IM3: undefined,
IM5: -399.13867,
IM7: undefined,
IM9: undefined
},
{
frequency: 2021.0483,
RX: undefined,
IM3: -319.34567,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2021.1204,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -363.41693
},
{
frequency: 2021.2633,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -362.91373
},
{
frequency: 2021.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.78262,
IM9: undefined
},
{
frequency: 2021.4073,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -362.4115
},
{
frequency: 2021.5023,
RX: undefined,
IM3: undefined,
IM5: -399.54752,
IM7: undefined,
IM9: undefined
},
{
frequency: 2021.5483,
RX: undefined,
IM3: -319.54367,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2021.5524,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -361.9103
},
{
frequency: 2021.6984,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -361.41022
},
{
frequency: 2021.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.73862,
IM9: undefined
},
{
frequency: 2021.8463,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -360.90784
},
{
frequency: 2021.9954,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -360.4067
},
{
frequency: 2022.0023,
RX: undefined,
IM3: undefined,
IM5: -399.961,
IM7: undefined,
IM9: undefined
},
{
frequency: 2022.0483,
RX: undefined,
IM3: -319.75485,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2022.1464,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -359.90356
},
{
frequency: 2022.2983,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -359.4018
},
{
frequency: 2022.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.68005,
IM9: undefined
},
{
frequency: 2022.4513,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -358.90143
},
{
frequency: 2022.5023,
RX: undefined,
IM3: undefined,
IM5: -400.38766,
IM7: undefined,
IM9: undefined
},
{
frequency: 2022.5483,
RX: undefined,
IM3: -319.95926,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2022.6063,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -358.39935
},
{
frequency: 2022.7623,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -357.89883
},
{
frequency: 2022.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.57675,
IM9: undefined
},
{
frequency: 2022.9203,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -357.39682
},
{
frequency: 2023.0023,
RX: undefined,
IM3: undefined,
IM5: -400.78964,
IM7: undefined,
IM9: undefined
},
{
frequency: 2023.0483,
RX: undefined,
IM3: -320.17123,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2023.0793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -356.89648
},
{
frequency: 2023.2404,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -356.39487
},
{
frequency: 2023.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.47235,
IM9: undefined
},
{
frequency: 2023.4033,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -355.89203
},
{
frequency: 2023.5023,
RX: undefined,
IM3: undefined,
IM5: -401.18637,
IM7: undefined,
IM9: undefined
},
{
frequency: 2023.5483,
RX: undefined,
IM3: -320.40186,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2023.5674,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -355.39117
},
{
frequency: 2023.7334,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -354.88934
},
{
frequency: 2023.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.3326,
IM9: undefined
},
{
frequency: 2023.9014,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -354.38666
},
{
frequency: 2024.0023,
RX: undefined,
IM3: undefined,
IM5: -401.57483,
IM7: undefined,
IM9: undefined
},
{
frequency: 2024.0483,
RX: undefined,
IM3: -320.646,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2024.0703,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -353.8862
},
{
frequency: 2024.2413,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -353.38507
},
{
frequency: 2024.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.1828,
IM9: undefined
},
{
frequency: 2024.4143,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -352.88345
},
{
frequency: 2024.5023,
RX: undefined,
IM3: undefined,
IM5: -401.9351,
IM7: undefined,
IM9: undefined
},
{
frequency: 2024.5483,
RX: undefined,
IM3: -320.92398,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2024.5894,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -352.3814
},
{
frequency: 2024.7664,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -351.87912
},
{
frequency: 2024.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -469.02835,
IM9: undefined
},
{
frequency: 2024.9453,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -351.3767
},
{
frequency: 2025.0023,
RX: undefined,
IM3: undefined,
IM5: -402.26382,
IM7: undefined,
IM9: undefined
},
{
frequency: 2025.0483,
RX: undefined,
IM3: -321.24792,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2025.1263,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -350.8743
},
{
frequency: 2025.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.8731,
IM9: undefined
},
{
frequency: 2025.3093,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -350.37198
},
{
frequency: 2025.4944,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -349.86993
},
{
frequency: 2025.5023,
RX: undefined,
IM3: undefined,
IM5: -402.5778,
IM7: undefined,
IM9: undefined
},
{
frequency: 2025.5483,
RX: undefined,
IM3: -321.5638,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2025.6814,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -349.3683
},
{
frequency: 2025.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.70377,
IM9: undefined
},
{
frequency: 2025.8704,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -348.8671
},
{
frequency: 2026.0023,
RX: undefined,
IM3: undefined,
IM5: -402.83325,
IM7: undefined,
IM9: undefined
},
{
frequency: 2026.0483,
RX: undefined,
IM3: -321.87357,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2026.0614,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -348.36655
},
{
frequency: 2026.2554,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -347.8642
},
{
frequency: 2026.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.5426,
IM9: undefined
},
{
frequency: 2026.4513,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -347.36276
},
{
frequency: 2026.5023,
RX: undefined,
IM3: undefined,
IM5: -403.07578,
IM7: undefined,
IM9: undefined
},
{
frequency: 2026.5483,
RX: undefined,
IM3: -322.1803,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2026.6493,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -346.86237
},
{
frequency: 2026.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.39243,
IM9: undefined
},
{
frequency: 2026.8503,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -346.36066
},
{
frequency: 2027.0023,
RX: undefined,
IM3: undefined,
IM5: -403.27716,
IM7: undefined,
IM9: undefined
},
{
frequency: 2027.0483,
RX: undefined,
IM3: -322.4605,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2027.0533,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -345.86032
},
{
frequency: 2027.2594,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -345.359
},
{
frequency: 2027.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.24313,
IM9: undefined
},
{
frequency: 2027.4684,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -344.85696
},
{
frequency: 2027.5023,
RX: undefined,
IM3: undefined,
IM5: -403.48395,
IM7: undefined,
IM9: undefined
},
{
frequency: 2027.5483,
RX: undefined,
IM3: -322.7234,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2027.6793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -344.35675
},
{
frequency: 2027.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -468.11014,
IM9: undefined
},
{
frequency: 2027.8933,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -343.8561
},
{
frequency: 2028.0023,
RX: undefined,
IM3: undefined,
IM5: -403.68784,
IM7: undefined,
IM9: undefined
},
{
frequency: 2028.0483,
RX: undefined,
IM3: -322.96262,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2028.1104,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -343.3553
},
{
frequency: 2028.3003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.99066,
IM9: undefined
},
{
frequency: 2028.3303,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -342.8545
},
{
frequency: 2028.5023,
RX: undefined,
IM3: undefined,
IM5: -403.89423,
IM7: undefined,
IM9: undefined
},
{
frequency: 2028.5483,
RX: undefined,
IM3: -323.16513,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2028.5533,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -342.35385
},
{
frequency: 2028.7793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -341.85364
},
{
frequency: 2028.8003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.8781,
IM9: undefined
},
{
frequency: 2029.0023,
RX: undefined,
IM3: undefined,
IM5: -404.13474,
IM7: undefined,
IM9: undefined
},
{
frequency: 2029.0094,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -341.3518
},
{
frequency: 2029.0483,
RX: undefined,
IM3: -323.3539,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2029.2184,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -467.36694,
IM9: undefined
},
{
frequency: 2029.2423,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -340.85083
},
{
frequency: 2029.2494,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -466.8554,
IM9: undefined
},
{
frequency: 2029.2683,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -466.33017,
IM9: undefined
},
{
frequency: 2029.2833,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -465.79218,
IM9: undefined
},
{
frequency: 2029.2953,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -465.25162,
IM9: undefined
},
{
frequency: 2029.3053,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.73245,
IM9: undefined
},
{
frequency: 2029.3143,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -464.20807,
IM9: undefined
},
{
frequency: 2029.3224,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -463.697,
IM9: undefined
},
{
frequency: 2029.3303,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -463.13977,
IM9: undefined
},
{
frequency: 2029.3374,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -462.61578,
IM9: undefined
},
{
frequency: 2029.3444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -462.06735,
IM9: undefined
},
{
frequency: 2029.3513,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -461.49152,
IM9: undefined
},
{
frequency: 2029.3573,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.9761,
IM9: undefined
},
{
frequency: 2029.3634,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -460.44785,
IM9: undefined
},
{
frequency: 2029.3694,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -459.9047,
IM9: undefined
},
{
frequency: 2029.3754,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -459.34537,
IM9: undefined
},
{
frequency: 2029.3813,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -458.77744,
IM9: undefined
},
{
frequency: 2029.3873,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -458.19885,
IM9: undefined
},
{
frequency: 2029.3933,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -457.61182,
IM9: undefined
},
{
frequency: 2029.3993,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -457.01718,
IM9: undefined
},
{
frequency: 2029.4054,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -456.4157,
IM9: undefined
},
{
frequency: 2029.4114,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -455.81433,
IM9: undefined
},
{
frequency: 2029.4164,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -455.3083,
IM9: undefined
},
{
frequency: 2029.4214,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -454.80182,
IM9: undefined
},
{
frequency: 2029.4264,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -454.2946,
IM9: undefined
},
{
frequency: 2029.4314,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -453.78537,
IM9: undefined
},
{
frequency: 2029.4364,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -453.2759,
IM9: undefined
},
{
frequency: 2029.4414,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -452.76697,
IM9: undefined
},
{
frequency: 2029.4463,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -452.25842,
IM9: undefined
},
{
frequency: 2029.4513,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -451.7508,
IM9: undefined
},
{
frequency: 2029.4563,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -451.246,
IM9: undefined
},
{
frequency: 2029.4613,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -450.74164,
IM9: undefined
},
{
frequency: 2029.4663,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -450.23956,
IM9: undefined
},
{
frequency: 2029.4713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -449.73862,
IM9: undefined
},
{
frequency: 2029.4773,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -449.14133,
IM9: undefined
},
{
frequency: 2029.4794,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -340.34875
},
{
frequency: 2029.4834,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -448.5466,
IM9: undefined
},
{
frequency: 2029.4894,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -447.9564,
IM9: undefined
},
{
frequency: 2029.4954,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -447.36954,
IM9: undefined
},
{
frequency: 2029.5013,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -446.78717,
IM9: undefined
},
{
frequency: 2029.5023,
RX: undefined,
IM3: undefined,
IM5: -404.37088,
IM7: undefined,
IM9: undefined
},
{
frequency: 2029.5073,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -446.20764,
IM9: undefined
},
{
frequency: 2029.5133,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -445.63385,
IM9: undefined
},
{
frequency: 2029.5193,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -445.064,
IM9: undefined
},
{
frequency: 2029.5254,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -444.49857,
IM9: undefined
},
{
frequency: 2029.5314,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -443.93762,
IM9: undefined
},
{
frequency: 2029.5374,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -443.38123,
IM9: undefined
},
{
frequency: 2029.5433,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -442.82935,
IM9: undefined
},
{
frequency: 2029.5483,
RX: undefined,
IM3: -323.55173,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2029.5493,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -442.28198,
IM9: undefined
},
{
frequency: 2029.5553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -441.73926,
IM9: undefined
},
{
frequency: 2029.5614,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -441.2014,
IM9: undefined
},
{
frequency: 2029.5674,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -440.66803,
IM9: undefined
},
{
frequency: 2029.5734,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -440.13913,
IM9: undefined
},
{
frequency: 2029.5793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -439.61472,
IM9: undefined
},
{
frequency: 2029.5853,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -439.09467,
IM9: undefined
},
{
frequency: 2029.5913,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -438.57935,
IM9: undefined
},
{
frequency: 2029.5973,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -438.06836,
IM9: undefined
},
{
frequency: 2029.6034,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -437.5619,
IM9: undefined
},
{
frequency: 2029.6094,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -437.05975,
IM9: undefined
},
{
frequency: 2029.6163,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -436.47925,
IM9: undefined
},
{
frequency: 2029.6233,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -435.90454,
IM9: undefined
},
{
frequency: 2029.6304,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -435.33572,
IM9: undefined
},
{
frequency: 2029.6373,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -434.77237,
IM9: undefined
},
{
frequency: 2029.6443,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -434.21478,
IM9: undefined
},
{
frequency: 2029.6514,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -433.6625,
IM9: undefined
},
{
frequency: 2029.6583,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -433.11578,
IM9: undefined
},
{
frequency: 2029.6654,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -432.57437,
IM9: undefined
},
{
frequency: 2029.6724,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -432.0381,
IM9: undefined
},
{
frequency: 2029.6793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -431.50708,
IM9: undefined
},
{
frequency: 2029.6864,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -430.98132,
IM9: undefined
},
{
frequency: 2029.6934,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -430.46027,
IM9: undefined
},
{
frequency: 2029.7003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -429.94427,
IM9: undefined
},
{
frequency: 2029.7074,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -429.4331,
IM9: undefined
},
{
frequency: 2029.7144,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -428.92667,
IM9: undefined
},
{
frequency: 2029.7194,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -339.84796
},
{
frequency: 2029.7213,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -428.42493,
IM9: undefined
},
{
frequency: 2029.7294,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -427.85727,
IM9: undefined
},
{
frequency: 2029.7373,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -427.2954,
IM9: undefined
},
{
frequency: 2029.7454,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -426.73947,
IM9: undefined
},
{
frequency: 2029.7533,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -426.1892,
IM9: undefined
},
{
frequency: 2029.7614,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -425.64447,
IM9: undefined
},
{
frequency: 2029.7693,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -425.10522,
IM9: undefined
},
{
frequency: 2029.7773,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -424.57144,
IM9: undefined
},
{
frequency: 2029.7854,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -424.04294,
IM9: undefined
},
{
frequency: 2029.7933,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -423.5196,
IM9: undefined
},
{
frequency: 2029.8014,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -423.00143,
IM9: undefined
},
{
frequency: 2029.8093,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -422.48816,
IM9: undefined
},
{
frequency: 2029.8174,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -421.97986,
IM9: undefined
},
{
frequency: 2029.8253,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -421.47644,
IM9: undefined
},
{
frequency: 2029.8344,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -420.9157,
IM9: undefined
},
{
frequency: 2029.8434,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -420.3608,
IM9: undefined
},
{
frequency: 2029.8523,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -419.81174,
IM9: undefined
},
{
frequency: 2029.8613,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -419.2683,
IM9: undefined
},
{
frequency: 2029.8704,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -418.7304,
IM9: undefined
},
{
frequency: 2029.8794,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -418.19797,
IM9: undefined
},
{
frequency: 2029.8883,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -417.67087,
IM9: undefined
},
{
frequency: 2029.8973,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -417.14896,
IM9: undefined
},
{
frequency: 2029.9064,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -416.63217,
IM9: undefined
},
{
frequency: 2029.9154,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -416.12045,
IM9: undefined
},
{
frequency: 2029.9243,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -415.61362,
IM9: undefined
},
{
frequency: 2029.9333,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -415.11163,
IM9: undefined
},
{
frequency: 2029.9434,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -414.55948,
IM9: undefined
},
{
frequency: 2029.9534,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -414.01306,
IM9: undefined
},
{
frequency: 2029.9634,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -413.4723,
IM9: -339.34653
},
{
frequency: 2029.9734,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -412.937,
IM9: undefined
},
{
frequency: 2029.9834,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -412.40714,
IM9: undefined
},
{
frequency: 2029.9934,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -411.8826,
IM9: undefined
},
{
frequency: 2030.0023,
RX: undefined,
IM3: undefined,
IM5: -404.6856,
IM7: undefined,
IM9: undefined
},
{
frequency: 2030.0033,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -411.36325,
IM9: undefined
},
{
frequency: 2030.0133,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -410.849,
IM9: undefined
},
{
frequency: 2030.0233,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -410.33975,
IM9: undefined
},
{
frequency: 2030.0333,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -409.83542,
IM9: undefined
},
{
frequency: 2030.0443,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -409.2862,
IM9: undefined
},
{
frequency: 2030.0483,
RX: undefined,
IM3: -323.76593,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2030.0553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -408.74268,
IM9: undefined
},
{
frequency: 2030.0664,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -408.20477,
IM9: undefined
},
{
frequency: 2030.0774,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -407.67233,
IM9: undefined
},
{
frequency: 2030.0884,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -407.14523,
IM9: undefined
},
{
frequency: 2030.0994,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -406.62344,
IM9: undefined
},
{
frequency: 2030.1104,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -406.10678,
IM9: undefined
},
{
frequency: 2030.1213,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -405.59518,
IM9: undefined
},
{
frequency: 2030.1323,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -405.08856,
IM9: undefined
},
{
frequency: 2030.1433,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -404.5868,
IM9: undefined
},
{
frequency: 2030.1554,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -404.04483,
IM9: undefined
},
{
frequency: 2030.1674,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -403.50845,
IM9: undefined
},
{
frequency: 2030.1793,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -402.97754,
IM9: undefined
},
{
frequency: 2030.1914,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -402.45197,
IM9: undefined
},
{
frequency: 2030.2034,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -401.93164,
IM9: undefined
},
{
frequency: 2030.2113,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -338.84473
},
{
frequency: 2030.2153,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -401.41644,
IM9: undefined
},
{
frequency: 2030.2273,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -400.90628,
IM9: undefined
},
{
frequency: 2030.2394,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -400.40103,
IM9: undefined
},
{
frequency: 2030.2513,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -399.90067,
IM9: undefined
},
{
frequency: 2030.2644,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -399.36392,
IM9: undefined
},
{
frequency: 2030.2773,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -398.83267,
IM9: undefined
},
{
frequency: 2030.2904,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -398.3068,
IM9: undefined
},
{
frequency: 2030.3033,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -397.78613,
IM9: undefined
},
{
frequency: 2030.3164,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -397.27063,
IM9: undefined
},
{
frequency: 2030.3293,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -396.76016,
IM9: undefined
},
{
frequency: 2030.3424,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -396.25464,
IM9: undefined
},
{
frequency: 2030.3553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -395.754,
IM9: undefined
},
{
frequency: 2030.3694,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -395.22012,
IM9: undefined
},
{
frequency: 2030.3833,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -394.69168,
IM9: undefined
},
{
frequency: 2030.3973,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -394.16855,
IM9: undefined
},
{
frequency: 2030.4114,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -393.6506,
IM9: undefined
},
{
frequency: 2030.4253,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -393.13773,
IM9: undefined
},
{
frequency: 2030.4393,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -392.62988,
IM9: undefined
},
{
frequency: 2030.4534,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -392.12692,
IM9: undefined
},
{
frequency: 2030.4634,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -338.34286
},
{
frequency: 2030.4684,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -391.59335,
IM9: undefined
},
{
frequency: 2030.4834,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -391.06522,
IM9: undefined
},
{
frequency: 2030.4983,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -390.54236,
IM9: undefined
},
{
frequency: 2030.5023,
RX: undefined,
IM3: undefined,
IM5: -405.03586,
IM7: undefined,
IM9: undefined
},
{
frequency: 2030.5133,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -390.0247,
IM9: undefined
},
{
frequency: 2030.5283,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -389.51212,
IM9: undefined
},
{
frequency: 2030.5433,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -389.00455,
IM9: undefined
},
{
frequency: 2030.5483,
RX: undefined,
IM3: -323.98608,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2030.5583,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -388.50183,
IM9: undefined
},
{
frequency: 2030.5743,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -387.97092,
IM9: undefined
},
{
frequency: 2030.5903,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -387.44537,
IM9: undefined
},
{
frequency: 2030.6063,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -386.92505,
IM9: undefined
},
{
frequency: 2030.6223,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -386.40988,
IM9: undefined
},
{
frequency: 2030.6383,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -385.89975,
IM9: undefined
},
{
frequency: 2030.6543,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -385.39456,
IM9: undefined
},
{
frequency: 2030.6703,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -384.89423,
IM9: undefined
},
{
frequency: 2030.6874,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -384.36783,
IM9: undefined
},
{
frequency: 2030.7043,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -383.84668,
IM9: undefined
},
{
frequency: 2030.7194,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -337.84113
},
{
frequency: 2030.7213,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -383.33072,
IM9: undefined
},
{
frequency: 2030.7384,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -382.8198,
IM9: undefined
},
{
frequency: 2030.7554,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -382.3138,
IM9: undefined
},
{
frequency: 2030.7723,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -381.8127,
IM9: undefined
},
{
frequency: 2030.7904,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -381.28735,
IM9: undefined
},
{
frequency: 2030.8083,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -380.7672,
IM9: undefined
},
{
frequency: 2030.8263,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -380.25223,
IM9: undefined
},
{
frequency: 2030.8444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -379.74228,
IM9: undefined
},
{
frequency: 2030.8623,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -379.23727,
IM9: undefined
},
{
frequency: 2030.8804,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -378.7371,
IM9: undefined
},
{
frequency: 2030.8993,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -378.2143,
IM9: undefined
},
{
frequency: 2030.9183,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -377.6967,
IM9: undefined
},
{
frequency: 2030.9374,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -377.18417,
IM9: undefined
},
{
frequency: 2030.9563,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -376.67664,
IM9: undefined
},
{
frequency: 2030.9753,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -376.174,
IM9: undefined
},
{
frequency: 2030.9794,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -337.3398
},
{
frequency: 2030.9954,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -375.65012,
IM9: undefined
},
{
frequency: 2031.0023,
RX: undefined,
IM3: undefined,
IM5: -405.44403,
IM7: undefined,
IM9: undefined
},
{
frequency: 2031.0154,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -375.13144,
IM9: undefined
},
{
frequency: 2031.0354,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -374.61786,
IM9: undefined
},
{
frequency: 2031.0483,
RX: undefined,
IM3: -324.1769,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2031.0553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -374.10928,
IM9: undefined
},
{
frequency: 2031.0753,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -373.60565,
IM9: undefined
},
{
frequency: 2031.0963,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -373.082,
IM9: undefined
},
{
frequency: 2031.1173,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -372.56357,
IM9: undefined
},
{
frequency: 2031.1383,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -372.05023,
IM9: undefined
},
{
frequency: 2031.1593,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -371.5419,
IM9: undefined
},
{
frequency: 2031.1803,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -371.03848,
IM9: undefined
},
{
frequency: 2031.2024,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -370.51627,
IM9: undefined
},
{
frequency: 2031.2244,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -369.99924,
IM9: undefined
},
{
frequency: 2031.2434,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -336.8391
},
{
frequency: 2031.2463,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -369.48727,
IM9: undefined
},
{
frequency: 2031.2683,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -368.9803,
IM9: undefined
},
{
frequency: 2031.2904,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -368.47818,
IM9: undefined
},
{
frequency: 2031.3134,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -367.95837,
IM9: undefined
},
{
frequency: 2031.3363,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -367.44373,
IM9: undefined
},
{
frequency: 2031.3594,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -366.93408,
IM9: undefined
},
{
frequency: 2031.3823,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -366.42938,
IM9: undefined
},
{
frequency: 2031.4064,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -365.9079,
IM9: undefined
},
{
frequency: 2031.4303,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -365.3916,
IM9: undefined
},
{
frequency: 2031.4543,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -364.88034,
IM9: undefined
},
{
frequency: 2031.4784,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -364.37405,
IM9: undefined
},
{
frequency: 2031.4904,
RX: undefined,
IM3: undefined,
IM5: -405.9501,
IM7: undefined,
IM9: undefined
},
{
frequency: 2031.5023,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -363.87265,
IM9: undefined
},
{
frequency: 2031.5123,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -336.33737
},
{
frequency: 2031.5273,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -363.35544,
IM9: undefined
},
{
frequency: 2031.5483,
RX: undefined,
IM3: -324.29068,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2031.5524,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -362.8433,
IM9: undefined
},
{
frequency: 2031.5774,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -362.33612,
IM9: undefined
},
{
frequency: 2031.6023,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -361.83386,
IM9: undefined
},
{
frequency: 2031.6283,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -361.3166,
IM9: undefined
},
{
frequency: 2031.6543,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -360.80438,
IM9: undefined
},
{
frequency: 2031.6803,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -360.29718,
IM9: undefined
},
{
frequency: 2031.7063,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -359.79486,
IM9: undefined
},
{
frequency: 2031.7334,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -359.2783,
IM9: undefined
},
{
frequency: 2031.7604,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -358.76678,
IM9: undefined
},
{
frequency: 2031.7854,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -335.8368
},
{
frequency: 2031.7874,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -358.26028,
IM9: undefined
},
{
frequency: 2031.8143,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -357.75864,
IM9: undefined
},
{
frequency: 2031.8424,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -357.24344,
IM9: undefined
},
{
frequency: 2031.8704,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -356.7333,
IM9: undefined
},
{
frequency: 2031.8983,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -356.22812,
IM9: undefined
},
{
frequency: 2031.9224,
RX: undefined,
IM3: undefined,
IM5: -406.4512,
IM7: undefined,
IM9: undefined
},
{
frequency: 2031.9264,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -355.72778,
IM9: undefined
},
{
frequency: 2031.9553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -355.2146,
IM9: undefined
},
{
frequency: 2031.9844,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -354.7064,
IM9: undefined
},
{
frequency: 2032.0133,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -354.20312,
IM9: undefined
},
{
frequency: 2032.0433,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -353.68756,
IM9: undefined
},
{
frequency: 2032.0483,
RX: undefined,
IM3: -324.2994,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2032.0634,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -335.33572
},
{
frequency: 2032.0734,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -353.17703,
IM9: undefined
},
{
frequency: 2032.1034,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -352.67145,
IM9: undefined
},
{
frequency: 2032.1333,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -352.17075,
IM9: undefined
},
{
frequency: 2032.1643,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -351.65836,
IM9: undefined
},
{
frequency: 2032.1953,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -351.15094,
IM9: undefined
},
{
frequency: 2032.2263,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -350.64844,
IM9: undefined
},
{
frequency: 2032.2583,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -350.13474,
IM9: undefined
},
{
frequency: 2032.2904,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -349.62607,
IM9: undefined
},
{
frequency: 2032.2924,
RX: undefined,
IM3: undefined,
IM5: -406.95728,
IM7: undefined,
IM9: undefined
},
{
frequency: 2032.3224,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -349.12228,
IM9: undefined
},
{
frequency: 2032.3463,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -334.83447
},
{
frequency: 2032.3553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -348.60785,
IM9: undefined
},
{
frequency: 2032.3883,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -348.09842,
IM9: undefined
},
{
frequency: 2032.4214,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -347.59393,
IM9: undefined
},
{
frequency: 2032.4553,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -347.0792,
IM9: undefined
},
{
frequency: 2032.4894,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -346.56952,
IM9: undefined
},
{
frequency: 2032.5233,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -346.06476,
IM9: undefined
},
{
frequency: 2032.5483,
RX: undefined,
IM3: -324.2335,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2032.5583,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -345.5502,
IM9: undefined
},
{
frequency: 2032.5934,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -345.0407,
IM9: undefined
},
{
frequency: 2032.6134,
RX: undefined,
IM3: undefined,
IM5: -407.46582,
IM7: undefined,
IM9: undefined
},
{
frequency: 2032.6283,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -344.53613,
IM9: undefined
},
{
frequency: 2032.6344,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -334.3333
},
{
frequency: 2032.6643,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -344.0222,
IM9: undefined
},
{
frequency: 2032.7003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -343.51324,
IM9: undefined
},
{
frequency: 2032.7363,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -343.00925,
IM9: undefined
},
{
frequency: 2032.7733,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -342.49625,
IM9: undefined
},
{
frequency: 2032.8103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -341.98828,
IM9: undefined
},
{
frequency: 2032.8474,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -341.4852,
IM9: undefined
},
{
frequency: 2032.8854,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -340.97354,
IM9: undefined
},
{
frequency: 2032.8983,
RX: undefined,
IM3: undefined,
IM5: -407.96887,
IM7: undefined,
IM9: undefined
},
{
frequency: 2032.9233,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -340.46686,
IM9: undefined
},
{
frequency: 2032.9274,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -333.83246
},
{
frequency: 2032.9613,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -339.96506,
IM9: undefined
},
{
frequency: 2033.0004,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -339.45502,
IM9: undefined
},
{
frequency: 2033.0393,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -338.9499,
IM9: undefined
},
{
frequency: 2033.0483,
RX: undefined,
IM3: -324.14963,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2033.0784,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -338.44965,
IM9: undefined
},
{
frequency: 2033.1184,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -337.94153,
IM9: undefined
},
{
frequency: 2033.1414,
RX: undefined,
IM3: undefined,
IM5: -408.47388,
IM7: undefined,
IM9: undefined
},
{
frequency: 2033.1583,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -337.4383,
IM9: undefined
},
{
frequency: 2033.1993,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -336.92746,
IM9: undefined
},
{
frequency: 2033.2253,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -333.33212
},
{
frequency: 2033.2404,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -336.4216,
IM9: undefined
},
{
frequency: 2033.2814,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -335.92062,
IM9: undefined
},
{
frequency: 2033.3234,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -335.41235,
IM9: undefined
},
{
frequency: 2033.3654,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -334.909,
IM9: undefined
},
{
frequency: 2033.3823,
RX: undefined,
IM3: undefined,
IM5: -408.98404,
IM7: undefined,
IM9: undefined
},
{
frequency: 2033.4083,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -334.39862,
IM9: undefined
},
{
frequency: 2033.4513,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -333.89322,
IM9: undefined
},
{
frequency: 2033.4944,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -333.39267,
IM9: undefined
},
{
frequency: 2033.5293,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -332.83093
},
{
frequency: 2033.5383,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -332.8854,
IM9: undefined
},
{
frequency: 2033.5483,
RX: undefined,
IM3: -324.0209,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2033.5824,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -332.38303,
IM9: undefined
},
{
frequency: 2033.6023,
RX: undefined,
IM3: undefined,
IM5: -409.48584,
IM7: undefined,
IM9: undefined
},
{
frequency: 2033.6273,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -331.8742,
IM9: undefined
},
{
frequency: 2033.6724,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -331.37027,
IM9: undefined
},
{
frequency: 2033.7184,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -330.86017,
IM9: undefined
},
{
frequency: 2033.7644,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -330.35498,
IM9: undefined
},
{
frequency: 2033.7943,
RX: undefined,
IM3: undefined,
IM5: -409.99176,
IM7: undefined,
IM9: undefined
},
{
frequency: 2033.8103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -329.85464,
IM9: undefined
},
{
frequency: 2033.8384,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -332.33072
},
{
frequency: 2033.8573,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -329.34836,
IM9: undefined
},
{
frequency: 2033.9043,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -328.84695,
IM9: undefined
},
{
frequency: 2033.9524,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -328.33978,
IM9: undefined
},
{
frequency: 2033.9813,
RX: undefined,
IM3: undefined,
IM5: -410.50223,
IM7: undefined,
IM9: undefined
},
{
frequency: 2034.0004,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -327.83752,
IM9: undefined
},
{
frequency: 2034.0483,
RX: undefined,
IM3: -323.87634,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2034.0493,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -327.3297,
IM9: undefined
},
{
frequency: 2034.0984,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -326.82684,
IM9: undefined
},
{
frequency: 2034.1483,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -326.31863,
IM9: undefined
},
{
frequency: 2034.1533,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -331.83005
},
{
frequency: 2034.1614,
RX: undefined,
IM3: undefined,
IM5: -411.02383,
IM7: undefined,
IM9: undefined
},
{
frequency: 2034.1984,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -325.81534,
IM9: undefined
},
{
frequency: 2034.2494,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -325.30695,
IM9: undefined
},
{
frequency: 2034.3004,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -324.80347,
IM9: undefined
},
{
frequency: 2034.3274,
RX: undefined,
IM3: undefined,
IM5: -411.5336,
IM7: undefined,
IM9: undefined
},
{
frequency: 2034.3523,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -324.29507,
IM9: undefined
},
{
frequency: 2034.4043,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -323.79156,
IM9: undefined
},
{
frequency: 2034.4574,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -323.28336,
IM9: undefined
},
{
frequency: 2034.4744,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -331.3292
},
{
frequency: 2034.4794,
RX: undefined,
IM3: undefined,
IM5: -412.0538,
IM7: undefined,
IM9: undefined
},
{
frequency: 2034.5104,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -322.78006,
IM9: undefined
},
{
frequency: 2034.5483,
RX: undefined,
IM3: -323.70325,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2034.5643,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -322.27222,
IM9: undefined
},
{
frequency: 2034.6184,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -321.76926,
IM9: undefined
},
{
frequency: 2034.6304,
RX: undefined,
IM3: undefined,
IM5: -412.5579,
IM7: undefined,
IM9: undefined
},
{
frequency: 2034.6733,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -321.26193,
IM9: undefined
},
{
frequency: 2034.7284,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -320.75952,
IM9: undefined
},
{
frequency: 2034.7823,
RX: undefined,
IM3: undefined,
IM5: -413.06332,
IM7: undefined,
IM9: undefined
},
{
frequency: 2034.7843,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -320.25287,
IM9: undefined
},
{
frequency: 2034.8014,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -330.82828
},
{
frequency: 2034.8403,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -319.7511,
IM9: undefined
},
{
frequency: 2034.8973,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -319.2453,
IM9: undefined
},
{
frequency: 2034.9233,
RX: undefined,
IM3: undefined,
IM5: -413.5772,
IM7: undefined,
IM9: undefined
},
{
frequency: 2034.9543,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -318.74435,
IM9: undefined
},
{
frequency: 2035.0123,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -318.23953,
IM9: undefined
},
{
frequency: 2035.0483,
RX: undefined,
IM3: -323.51196,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2035.0703,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -317.73953,
IM9: undefined
},
{
frequency: 2035.0724,
RX: undefined,
IM3: undefined,
IM5: -414.09595,
IM7: undefined,
IM9: undefined
},
{
frequency: 2035.1294,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -317.23578,
IM9: undefined
},
{
frequency: 2035.1344,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -330.32745
},
{
frequency: 2035.1893,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -316.72845,
IM9: undefined
},
{
frequency: 2035.2373,
RX: undefined,
IM3: undefined,
IM5: -414.6208,
IM7: undefined,
IM9: undefined
},
{
frequency: 2035.2494,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -316.226,
IM9: undefined
},
{
frequency: 2035.3103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -315.72012,
IM9: undefined
},
{
frequency: 2035.3713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -315.2191,
IM9: undefined
},
{
frequency: 2035.4233,
RX: undefined,
IM3: undefined,
IM5: -415.14075,
IM7: undefined,
IM9: undefined
},
{
frequency: 2035.4333,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -314.71472,
IM9: undefined
},
{
frequency: 2035.4734,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -329.82684
},
{
frequency: 2035.4963,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -314.20718,
IM9: undefined
},
{
frequency: 2035.5483,
RX: undefined,
IM3: -323.31876,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2035.5593,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -313.70453,
IM9: undefined
},
{
frequency: 2035.6234,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -313.19882,
IM9: undefined
},
{
frequency: 2035.6874,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -312.69797,
IM9: undefined
},
{
frequency: 2035.7523,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -312.19418,
IM9: undefined
},
{
frequency: 2035.8184,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -311.68756,
IM9: -329.32648
},
{
frequency: 2035.8844,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -311.18582,
IM9: undefined
},
{
frequency: 2035.9233,
RX: undefined,
IM3: undefined,
IM5: -415.57922,
IM7: undefined,
IM9: undefined
},
{
frequency: 2035.9514,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -310.6814,
IM9: undefined
},
{
frequency: 2036.0194,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -310.17438,
IM9: undefined
},
{
frequency: 2036.0483,
RX: undefined,
IM3: -323.13492,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2036.0874,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -309.6722,
IM9: undefined
},
{
frequency: 2036.1464,
RX: undefined,
IM3: undefined,
IM5: -415.04608,
IM7: undefined,
IM9: undefined
},
{
frequency: 2036.1564,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -309.1676,
IM9: undefined
},
{
frequency: 2036.1693,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -328.82642
},
{
frequency: 2036.2263,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -308.66058,
IM9: undefined
},
{
frequency: 2036.2964,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -308.15848,
IM9: undefined
},
{
frequency: 2036.3334,
RX: undefined,
IM3: undefined,
IM5: -414.54413,
IM7: undefined,
IM9: undefined
},
{
frequency: 2036.3673,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -307.65408,
IM9: undefined
},
{
frequency: 2036.4393,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -307.14752,
IM9: undefined
},
{
frequency: 2036.4613,
RX: undefined,
IM3: undefined,
IM5: -414.00266,
IM7: undefined,
IM9: undefined
},
{
frequency: 2036.5114,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -306.64584,
IM9: undefined
},
{
frequency: 2036.5273,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -328.3252
},
{
frequency: 2036.5483,
RX: undefined,
IM3: -322.99802,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2036.5844,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -306.1421,
IM9: undefined
},
{
frequency: 2036.5934,
RX: undefined,
IM3: undefined,
IM5: -413.49127,
IM7: undefined,
IM9: undefined
},
{
frequency: 2036.6583,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -305.63635,
IM9: undefined
},
{
frequency: 2036.7153,
RX: undefined,
IM3: undefined,
IM5: -412.9796,
IM7: undefined,
IM9: undefined
},
{
frequency: 2036.7323,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -305.13547,
IM9: undefined
},
{
frequency: 2036.8074,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -304.63266,
IM9: undefined
},
{
frequency: 2036.8324,
RX: undefined,
IM3: undefined,
IM5: -412.45187,
IM7: undefined,
IM9: undefined
},
{
frequency: 2036.8833,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -304.12808,
IM9: undefined
},
{
frequency: 2036.8914,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -327.82416
},
{
frequency: 2036.9424,
RX: undefined,
IM3: undefined,
IM5: -411.94983,
IM7: undefined,
IM9: undefined
},
{
frequency: 2036.9603,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -303.62177,
IM9: undefined
},
{
frequency: 2037.0374,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -303.12036,
IM9: undefined
},
{
frequency: 2037.0483,
RX: undefined,
IM3: -322.9249,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2037.0643,
RX: undefined,
IM3: undefined,
IM5: -411.40182,
IM7: undefined,
IM9: undefined
},
{
frequency: 2037.1154,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -302.61728,
IM9: undefined
},
{
frequency: 2037.1853,
RX: undefined,
IM3: undefined,
IM5: -410.89337,
IM7: undefined,
IM9: undefined
},
{
frequency: 2037.1943,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -302.11267,
IM9: undefined
},
{
frequency: 2037.2614,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -327.32324
},
{
frequency: 2037.2744,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -301.6066,
IM9: undefined
},
{
frequency: 2037.3014,
RX: undefined,
IM3: undefined,
IM5: -410.3803,
IM7: undefined,
IM9: undefined
},
{
frequency: 2037.3544,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -301.1054,
IM9: undefined
},
{
frequency: 2037.4264,
RX: undefined,
IM3: undefined,
IM5: -409.8751,
IM7: undefined,
IM9: undefined
},
{
frequency: 2037.4353,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -300.60278,
IM9: undefined
},
{
frequency: 2037.5173,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -300.09888,
IM9: undefined
},
{
frequency: 2037.5464,
RX: undefined,
IM3: undefined,
IM5: -409.37393,
IM7: undefined,
IM9: undefined
},
{
frequency: 2037.5483,
RX: undefined,
IM3: -322.95276,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2037.6003,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -299.59372,
IM9: undefined
},
{
frequency: 2037.6373,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -326.82217
},
{
frequency: 2037.6733,
RX: undefined,
IM3: undefined,
IM5: -408.87076,
IM7: undefined,
IM9: undefined
},
{
frequency: 2037.6833,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -299.0934,
IM9: undefined
},
{
frequency: 2037.7673,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -298.59192,
IM9: undefined
},
{
frequency: 2037.8083,
RX: undefined,
IM3: undefined,
IM5: -408.3694,
IM7: undefined,
IM9: undefined
},
{
frequency: 2037.8524,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -298.08936,
IM9: undefined
},
{
frequency: 2037.9384,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -297.58572,
IM9: undefined
},
{
frequency: 2037.9414,
RX: undefined,
IM3: undefined,
IM5: -407.83777,
IM7: undefined,
IM9: undefined
},
{
frequency: 2038.0183,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -326.32205
},
{
frequency: 2038.0254,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -297.08115,
IM9: undefined
},
{
frequency: 2038.0483,
RX: undefined,
IM3: -322.98984,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2038.0853,
RX: undefined,
IM3: undefined,
IM5: -407.33163,
IM7: undefined,
IM9: undefined
},
{
frequency: 2038.1134,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -296.5757,
IM9: undefined
},
{
frequency: 2038.2014,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -296.0751,
IM9: undefined
},
{
frequency: 2038.2384,
RX: undefined,
IM3: undefined,
IM5: -406.82193,
IM7: undefined,
IM9: undefined
},
{
frequency: 2038.2904,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -295.57367,
IM9: undefined
},
{
frequency: 2038.3804,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -295.07147,
IM9: undefined
},
{
frequency: 2038.3973,
RX: undefined,
IM3: undefined,
IM5: -406.31512,
IM7: undefined,
IM9: undefined
},
{
frequency: 2038.4054,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -325.82123
},
{
frequency: 2038.4713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -294.56854,
IM9: undefined
},
{
frequency: 2038.5483,
RX: undefined,
IM3: -323.0533,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2038.5603,
RX: undefined,
IM3: undefined,
IM5: -405.8003,
IM7: undefined,
IM9: undefined
},
{
frequency: 2038.5634,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -294.06497,
IM9: undefined
},
{
frequency: 2038.6564,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -293.56085,
IM9: undefined
},
{
frequency: 2038.7334,
RX: undefined,
IM3: undefined,
IM5: -405.2925,
IM7: undefined,
IM9: undefined
},
{
frequency: 2038.7504,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -293.05618,
IM9: undefined
},
{
frequency: 2038.7974,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -325.32065
},
{
frequency: 2038.8453,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -292.5511,
IM9: undefined
},
{
frequency: 2038.9104,
RX: undefined,
IM3: undefined,
IM5: -404.78668,
IM7: undefined,
IM9: undefined
},
{
frequency: 2038.9403,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -292.05084,
IM9: undefined
},
{
frequency: 2039.0364,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -291.55014,
IM9: undefined
},
{
frequency: 2039.0483,
RX: undefined,
IM3: -323.15933,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2039.0974,
RX: undefined,
IM3: undefined,
IM5: -404.28226,
IM7: undefined,
IM9: undefined
},
{
frequency: 2039.1334,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -291.0491,
IM9: undefined
},
{
frequency: 2039.1943,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -324.81985
},
{
frequency: 2039.2313,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -290.5477,
IM9: undefined
},
{
frequency: 2039.2914,
RX: undefined,
IM3: undefined,
IM5: -403.77774,
IM7: undefined,
IM9: undefined
},
{
frequency: 2039.3303,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -290.04605,
IM9: undefined
},
{
frequency: 2039.4304,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -289.5442,
IM9: undefined
},
{
frequency: 2039.5004,
RX: undefined,
IM3: undefined,
IM5: -403.27753,
IM7: undefined,
IM9: undefined
},
{
frequency: 2039.5314,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -289.04218,
IM9: undefined
},
{
frequency: 2039.5483,
RX: undefined,
IM3: -323.2903,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2039.5953,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -324.3196
},
{
frequency: 2039.6334,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -288.54004,
IM9: undefined
},
{
frequency: 2039.7144,
RX: undefined,
IM3: undefined,
IM5: -402.77737,
IM7: undefined,
IM9: undefined
},
{
frequency: 2039.7363,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -288.03787,
IM9: undefined
},
{
frequency: 2039.8403,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -287.53568,
IM9: undefined
},
{
frequency: 2039.9414,
RX: undefined,
IM3: undefined,
IM5: -402.27594,
IM7: undefined,
IM9: undefined
},
{
frequency: 2039.9453,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -287.0335,
IM9: undefined
},
{
frequency: 2040.0004,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -323.8194
},
{
frequency: 2040.0483,
RX: undefined,
IM3: -323.4236,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2040.0514,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -286.53143,
IM9: undefined
},
{
frequency: 2040.1583,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -286.0295,
IM9: undefined
},
{
frequency: 2040.1854,
RX: undefined,
IM3: undefined,
IM5: -401.7674,
IM7: undefined,
IM9: undefined
},
{
frequency: 2040.2664,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -285.52774,
IM9: undefined
},
{
frequency: 2040.3754,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -285.0262,
IM9: undefined
},
{
frequency: 2040.4094,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -323.31866
},
{
frequency: 2040.4374,
RX: undefined,
IM3: undefined,
IM5: -401.26584,
IM7: undefined,
IM9: undefined
},
{
frequency: 2040.4854,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -284.52493,
IM9: undefined
},
{
frequency: 2040.5483,
RX: undefined,
IM3: -323.52374,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2040.5963,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -284.02402,
IM9: undefined
},
{
frequency: 2040.7043,
RX: undefined,
IM3: undefined,
IM5: -400.7633,
IM7: undefined,
IM9: undefined
},
{
frequency: 2040.7084,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -283.52344,
IM9: undefined
},
{
frequency: 2040.8214,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -283.0233,
IM9: -322.8181
},
{
frequency: 2040.9364,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -282.5192,
IM9: undefined
},
{
frequency: 2040.9913,
RX: undefined,
IM3: undefined,
IM5: -400.25864,
IM7: undefined,
IM9: undefined
},
{
frequency: 2041.0483,
RX: undefined,
IM3: -323.56836,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2041.0524,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -282.01575,
IM9: undefined
},
{
frequency: 2041.1693,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -281.5129,
IM9: undefined
},
{
frequency: 2041.2363,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -322.3171
},
{
frequency: 2041.2874,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -281.01074,
IM9: undefined
},
{
frequency: 2041.2924,
RX: undefined,
IM3: undefined,
IM5: -399.74765,
IM7: undefined,
IM9: undefined
},
{
frequency: 2041.4064,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -280.50934,
IM9: undefined
},
{
frequency: 2041.5264,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -280.0087,
IM9: undefined
},
{
frequency: 2041.5483,
RX: undefined,
IM3: -323.5859,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2041.6223,
RX: undefined,
IM3: undefined,
IM5: -399.2447,
IM7: undefined,
IM9: undefined
},
{
frequency: 2041.6483,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -279.5048,
IM9: undefined
},
{
frequency: 2041.6533,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -321.81638
},
{
frequency: 2041.7714,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -279.00183,
IM9: undefined
},
{
frequency: 2041.8954,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -278.49988,
IM9: undefined
},
{
frequency: 2041.9603,
RX: undefined,
IM3: undefined,
IM5: -398.74277,
IM7: undefined,
IM9: undefined
},
{
frequency: 2042.0204,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -277.999,
IM9: undefined
},
{
frequency: 2042.0483,
RX: undefined,
IM3: -323.58456,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2042.0724,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -321.31537
},
{
frequency: 2042.1473,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -277.49527,
IM9: undefined
},
{
frequency: 2042.2754,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -276.99277,
IM9: undefined
},
{
frequency: 2042.3344,
RX: undefined,
IM3: undefined,
IM5: -398.23914,
IM7: undefined,
IM9: undefined
},
{
frequency: 2042.4044,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -276.49158,
IM9: undefined
},
{
frequency: 2042.4923,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -320.81482
},
{
frequency: 2042.5354,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -275.98788,
IM9: undefined
},
{
frequency: 2042.5483,
RX: undefined,
IM3: -323.6493,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2042.6674,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -275.48566,
IM9: undefined
},
{
frequency: 2042.7284,
RX: undefined,
IM3: undefined,
IM5: -397.73508,
IM7: undefined,
IM9: undefined
},
{
frequency: 2042.8004,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -274.98495,
IM9: undefined
},
{
frequency: 2042.9133,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -320.31436
},
{
frequency: 2042.9354,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -274.48212,
IM9: undefined
},
{
frequency: 2043.0483,
RX: undefined,
IM3: -323.7598,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2043.0714,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -273.981,
IM9: undefined
},
{
frequency: 2043.1594,
RX: undefined,
IM3: undefined,
IM5: -397.2323,
IM7: undefined,
IM9: undefined
},
{
frequency: 2043.2094,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -273.47797,
IM9: undefined
},
{
frequency: 2043.3353,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -319.8136
},
{
frequency: 2043.3484,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -272.97684,
IM9: undefined
},
{
frequency: 2043.4894,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -272.4741,
IM9: undefined
},
{
frequency: 2043.5483,
RX: undefined,
IM3: -323.92307,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2043.6244,
RX: undefined,
IM3: undefined,
IM5: -396.7315,
IM7: undefined,
IM9: undefined
},
{
frequency: 2043.6313,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -271.97342,
IM9: undefined
},
{
frequency: 2043.7573,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -319.31354
},
{
frequency: 2043.7754,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -271.47137,
IM9: undefined
},
{
frequency: 2043.9214,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -270.9681,
IM9: undefined
},
{
frequency: 2044.0483,
RX: undefined,
IM3: -324.13254,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2044.0684,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -270.46725,
IM9: undefined
},
{
frequency: 2044.1244,
RX: undefined,
IM3: undefined,
IM5: -396.24878,
IM7: undefined,
IM9: undefined
},
{
frequency: 2044.1804,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -318.81277
},
{
frequency: 2044.2174,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -269.96542,
IM9: undefined
},
{
frequency: 2044.3684,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -269.46283,
IM9: undefined
},
{
frequency: 2044.5214,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -268.95963,
IM9: undefined
},
{
frequency: 2044.5483,
RX: undefined,
IM3: -324.3638,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2044.6034,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -318.3124
},
{
frequency: 2044.6244,
RX: undefined,
IM3: undefined,
IM5: -395.81244,
IM7: undefined,
IM9: undefined
},
{
frequency: 2044.6754,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -268.45923,
IM9: undefined
},
{
frequency: 2044.8314,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -267.95844,
IM9: undefined
},
{
frequency: 2044.9894,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -267.45746,
IM9: undefined
},
{
frequency: 2045.0273,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -317.81125
},
{
frequency: 2045.0483,
RX: undefined,
IM3: -324.63766,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2045.1244,
RX: undefined,
IM3: undefined,
IM5: -395.4073,
IM7: undefined,
IM9: undefined
},
{
frequency: 2045.1494,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -266.95642,
IM9: undefined
},
{
frequency: 2045.3114,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -266.45554,
IM9: undefined
},
{
frequency: 2045.4514,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -317.3106
},
{
frequency: 2045.4753,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -265.9549,
IM9: undefined
},
{
frequency: 2045.5483,
RX: undefined,
IM3: -324.98334,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2045.6244,
RX: undefined,
IM3: undefined,
IM5: -395.06302,
IM7: undefined,
IM9: undefined
},
{
frequency: 2045.6414,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -265.4547,
IM9: undefined
},
{
frequency: 2045.8104,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -264.95215,
IM9: undefined
},
{
frequency: 2045.8754,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -316.81058
},
{
frequency: 2045.9813,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -264.4504,
IM9: undefined
},
{
frequency: 2046.0483,
RX: undefined,
IM3: -325.41125,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2046.1244,
RX: undefined,
IM3: undefined,
IM5: -394.75223,
IM7: undefined,
IM9: undefined
},
{
frequency: 2046.1544,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -263.94968,
IM9: undefined
},
{
frequency: 2046.3004,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -316.31024
},
{
frequency: 2046.3303,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -263.4472,
IM9: undefined
},
{
frequency: 2046.5084,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -262.9461,
IM9: undefined
},
{
frequency: 2046.5184,
RX: undefined,
IM3: -325.9155,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2046.6244,
RX: undefined,
IM3: undefined,
IM5: -394.47812,
IM7: undefined,
IM9: undefined
},
{
frequency: 2046.6893,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -262.4438,
IM9: undefined
},
{
frequency: 2046.7263,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -315.80988
},
{
frequency: 2046.8723,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -261.94318,
IM9: undefined
},
{
frequency: 2046.9023,
RX: undefined,
IM3: -326.41693,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2047.0583,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -261.4418,
IM9: undefined
},
{
frequency: 2047.1244,
RX: undefined,
IM3: undefined,
IM5: -394.23526,
IM7: undefined,
IM9: undefined
},
{
frequency: 2047.1533,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -315.30984
},
{
frequency: 2047.2474,
RX: undefined,
IM3: -326.91718,
IM5: undefined,
IM7: -260.9399,
IM9: undefined
},
{
frequency: 2047.4393,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -260.43774,
IM9: undefined
},
{
frequency: 2047.5824,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -314.8094
},
{
frequency: 2047.6244,
RX: undefined,
IM3: undefined,
IM5: -394.0255,
IM7: undefined,
IM9: undefined
},
{
frequency: 2047.6294,
RX: undefined,
IM3: -327.41852,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2047.6344,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -259.9356,
IM9: undefined
},
{
frequency: 2047.8324,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -259.43372,
IM9: undefined
},
{
frequency: 2048.0134,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -314.30896
},
{
frequency: 2048.0264,
RX: undefined,
IM3: -327.92087,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2048.0334,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -258.93237,
IM9: undefined
},
{
frequency: 2048.1255,
RX: undefined,
IM3: undefined,
IM5: -393.85413,
IM7: undefined,
IM9: undefined
},
{
frequency: 2048.2373,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -258.4318,
IM9: undefined
},
{
frequency: 2048.4453,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -257.92987,
IM9: undefined
},
{
frequency: 2048.4473,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -313.80792
},
{
frequency: 2048.4614,
RX: undefined,
IM3: -328.42532,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2048.6255,
RX: undefined,
IM3: undefined,
IM5: -393.70242,
IM7: undefined,
IM9: undefined
},
{
frequency: 2048.6565,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -257.42932,
IM9: undefined
},
{
frequency: 2048.8713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -256.9281,
IM9: undefined
},
{
frequency: 2048.8843,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -313.30682
},
{
frequency: 2048.9614,
RX: undefined,
IM3: -328.87387,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2049.0903,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -256.42657,
IM9: undefined
},
{
frequency: 2049.1255,
RX: undefined,
IM3: undefined,
IM5: -393.57916,
IM7: undefined,
IM9: undefined
},
{
frequency: 2049.3135,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -255.9251,
IM9: undefined
},
{
frequency: 2049.3245,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -312.80627
},
{
frequency: 2049.4614,
RX: undefined,
IM3: -329.0681,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2049.5403,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -255.42406,
IM9: undefined
},
{
frequency: 2049.6255,
RX: undefined,
IM3: undefined,
IM5: -393.46967,
IM7: undefined,
IM9: undefined
},
{
frequency: 2049.7683,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -312.30576
},
{
frequency: 2049.7715,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -254.9238,
IM9: undefined
},
{
frequency: 2049.9614,
RX: undefined,
IM3: -328.93875,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2050.0073,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -254.4226,
IM9: undefined
},
{
frequency: 2050.1255,
RX: undefined,
IM3: undefined,
IM5: -393.37744,
IM7: undefined,
IM9: undefined
},
{
frequency: 2050.2173,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -311.80484
},
{
frequency: 2050.2483,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -253.92094,
IM9: undefined
},
{
frequency: 2050.4614,
RX: undefined,
IM3: -328.52408,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2050.4944,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -253.41931,
IM9: undefined
},
{
frequency: 2050.6255,
RX: undefined,
IM3: undefined,
IM5: -393.2986,
IM7: undefined,
IM9: undefined
},
{
frequency: 2050.6714,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -311.30417
},
{
frequency: 2050.7454,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -252.91818,
IM9: undefined
},
{
frequency: 2050.8914,
RX: undefined,
IM3: -328.02173,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2051.0015,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -252.41801,
IM9: undefined
},
{
frequency: 2051.1255,
RX: undefined,
IM3: undefined,
IM5: -393.23328,
IM7: undefined,
IM9: undefined
},
{
frequency: 2051.1313,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -310.8034
},
{
frequency: 2051.2634,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -251.9174,
IM9: undefined
},
{
frequency: 2051.2734,
RX: undefined,
IM3: -327.5149,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2051.5315,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -251.41693,
IM9: undefined
},
{
frequency: 2051.5974,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -310.3033
},
{
frequency: 2051.6255,
RX: undefined,
IM3: undefined,
IM5: -393.16562,
IM7: undefined,
IM9: undefined
},
{
frequency: 2051.6343,
RX: undefined,
IM3: -327.012,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2051.8064,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -250.91536,
IM9: undefined
},
{
frequency: 2051.9734,
RX: undefined,
IM3: -326.50983,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2052.0713,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -309.80246
},
{
frequency: 2052.0874,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -250.41515,
IM9: undefined
},
{
frequency: 2052.1255,
RX: undefined,
IM3: undefined,
IM5: -393.10406,
IM7: undefined,
IM9: undefined
},
{
frequency: 2052.2883,
RX: undefined,
IM3: -326.00943,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2052.3755,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -249.9151,
IM9: undefined
},
{
frequency: 2052.5535,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -309.3017
},
{
frequency: 2052.5745,
RX: undefined,
IM3: -325.50925,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2052.6255,
RX: undefined,
IM3: undefined,
IM5: -393.0335,
IM7: undefined,
IM9: undefined
},
{
frequency: 2052.6714,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -249.41425,
IM9: undefined
},
{
frequency: 2052.8503,
RX: undefined,
IM3: -325.00482,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2052.9753,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -248.91331,
IM9: undefined
},
{
frequency: 2053.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -308.8008
},
{
frequency: 2053.1184,
RX: undefined,
IM3: -324.50085,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2053.1255,
RX: undefined,
IM3: undefined,
IM5: -392.95218,
IM7: undefined,
IM9: undefined
},
{
frequency: 2053.2874,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -248.41306,
IM9: undefined
},
{
frequency: 2053.3755,
RX: undefined,
IM3: -323.99982,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2053.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -308.30054
},
{
frequency: 2053.6084,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -247.91264,
IM9: undefined
},
{
frequency: 2053.6255,
RX: undefined,
IM3: undefined,
IM5: -392.84988,
IM7: undefined,
IM9: undefined
},
{
frequency: 2053.6313,
RX: undefined,
IM3: -323.4972,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2053.8904,
RX: undefined,
IM3: -322.99274,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2053.9395,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -247.41138,
IM9: undefined
},
{
frequency: 2054.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -307.8104
},
{
frequency: 2054.1255,
RX: undefined,
IM3: undefined,
IM5: -392.73157,
IM7: undefined,
IM9: undefined
},
{
frequency: 2054.1565,
RX: undefined,
IM3: -322.48828,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2054.2803,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -246.91011,
IM9: undefined
},
{
frequency: 2054.4543,
RX: undefined,
IM3: -321.9822,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2054.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -307.3304
},
{
frequency: 2054.6255,
RX: undefined,
IM3: undefined,
IM5: -392.5764,
IM7: undefined,
IM9: undefined
},
{
frequency: 2054.6313,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -246.40968,
IM9: undefined
},
{
frequency: 2054.7705,
RX: undefined,
IM3: -321.4817,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2054.9934,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -245.90945,
IM9: undefined
},
{
frequency: 2055.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -306.86066
},
{
frequency: 2055.1113,
RX: undefined,
IM3: -320.98163,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2055.1255,
RX: undefined,
IM3: undefined,
IM5: -392.39578,
IM7: undefined,
IM9: undefined
},
{
frequency: 2055.3674,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -245.40887,
IM9: undefined
},
{
frequency: 2055.4705,
RX: undefined,
IM3: -320.4811,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2055.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -306.4009
},
{
frequency: 2055.6255,
RX: undefined,
IM3: undefined,
IM5: -392.17755,
IM7: undefined,
IM9: undefined
},
{
frequency: 2055.7534,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -244.90875,
IM9: undefined
},
{
frequency: 2055.8474,
RX: undefined,
IM3: -319.9778,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0093,
RX: undefined,
IM3: undefined,
IM5: -391.62738,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0125,
RX: undefined,
IM3: undefined,
IM5: -391.08365,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0144,
RX: undefined,
IM3: undefined,
IM5: -390.45474,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0164,
RX: undefined,
IM3: undefined,
IM5: -389.5571,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0173,
RX: undefined,
IM3: undefined,
IM5: -388.99582,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0183,
RX: undefined,
IM3: undefined,
IM5: -388.35855,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0193,
RX: undefined,
IM3: undefined,
IM5: -387.65094,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0205,
RX: undefined,
IM3: undefined,
IM5: -386.88,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0215,
RX: undefined,
IM3: undefined,
IM5: -386.05832,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0225,
RX: undefined,
IM3: undefined,
IM5: -385.1958,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0234,
RX: undefined,
IM3: undefined,
IM5: -384.29843,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0244,
RX: undefined,
IM3: undefined,
IM5: -383.37894,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0254,
RX: undefined,
IM3: undefined,
IM5: -382.44476,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0264,
RX: undefined,
IM3: undefined,
IM5: -381.50327,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0273,
RX: undefined,
IM3: undefined,
IM5: -380.56076,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0283,
RX: undefined,
IM3: undefined,
IM5: -379.6201,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0293,
RX: undefined,
IM3: undefined,
IM5: -378.6862,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0303,
RX: undefined,
IM3: undefined,
IM5: -377.76285,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0315,
RX: undefined,
IM3: undefined,
IM5: -376.85165,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0325,
RX: undefined,
IM3: undefined,
IM5: -375.9514,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0334,
RX: undefined,
IM3: undefined,
IM5: -375.0672,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0344,
RX: undefined,
IM3: undefined,
IM5: -374.19754,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0354,
RX: undefined,
IM3: undefined,
IM5: -373.3429,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0364,
RX: undefined,
IM3: undefined,
IM5: -372.50427,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0374,
RX: undefined,
IM3: undefined,
IM5: -371.68127,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0383,
RX: undefined,
IM3: undefined,
IM5: -370.87378,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0393,
RX: undefined,
IM3: undefined,
IM5: -370.08163,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0403,
RX: undefined,
IM3: undefined,
IM5: -369.30405,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0415,
RX: undefined,
IM3: undefined,
IM5: -368.54187,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0425,
RX: undefined,
IM3: undefined,
IM5: -367.79413,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0435,
RX: undefined,
IM3: undefined,
IM5: -367.06046,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0444,
RX: undefined,
IM3: undefined,
IM5: -366.34058,
IM7: undefined,
IM9: -305.95105
},
{
frequency: 2056.0454,
RX: undefined,
IM3: undefined,
IM5: -365.63376,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0464,
RX: undefined,
IM3: undefined,
IM5: -364.94016,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0474,
RX: undefined,
IM3: undefined,
IM5: -364.25916,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0483,
RX: undefined,
IM3: undefined,
IM5: -363.59048,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0493,
RX: undefined,
IM3: undefined,
IM5: -362.93347,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0503,
RX: undefined,
IM3: undefined,
IM5: -362.28818,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0513,
RX: undefined,
IM3: undefined,
IM5: -361.65402,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0525,
RX: undefined,
IM3: undefined,
IM5: -361.0308,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0535,
RX: undefined,
IM3: undefined,
IM5: -360.41803,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0544,
RX: undefined,
IM3: undefined,
IM5: -359.81552,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0554,
RX: undefined,
IM3: undefined,
IM5: -359.22284,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0564,
RX: undefined,
IM3: undefined,
IM5: -358.63977,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0574,
RX: undefined,
IM3: undefined,
IM5: -358.06616,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0583,
RX: undefined,
IM3: undefined,
IM5: -357.50146,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0593,
RX: undefined,
IM3: undefined,
IM5: -356.94562,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0603,
RX: undefined,
IM3: undefined,
IM5: -356.3983,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0613,
RX: undefined,
IM3: undefined,
IM5: -355.85925,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0625,
RX: undefined,
IM3: undefined,
IM5: -355.32825,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0635,
RX: undefined,
IM3: undefined,
IM5: -354.80508,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0645,
RX: undefined,
IM3: undefined,
IM5: -354.2896,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0654,
RX: undefined,
IM3: undefined,
IM5: -353.78146,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0664,
RX: undefined,
IM3: undefined,
IM5: -353.2805,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0684,
RX: undefined,
IM3: undefined,
IM5: -352.29947,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0703,
RX: undefined,
IM3: undefined,
IM5: -351.34503,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0725,
RX: undefined,
IM3: undefined,
IM5: -350.41574,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0745,
RX: undefined,
IM3: undefined,
IM5: -349.5104,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0764,
RX: undefined,
IM3: undefined,
IM5: -348.6279,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0784,
RX: undefined,
IM3: undefined,
IM5: -347.767,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0803,
RX: undefined,
IM3: undefined,
IM5: -346.92676,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0823,
RX: undefined,
IM3: undefined,
IM5: -346.10623,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0845,
RX: undefined,
IM3: undefined,
IM5: -345.30447,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0864,
RX: undefined,
IM3: undefined,
IM5: -344.52072,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0884,
RX: undefined,
IM3: undefined,
IM5: -343.75415,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0903,
RX: undefined,
IM3: undefined,
IM5: -343.00406,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0923,
RX: undefined,
IM3: undefined,
IM5: -342.2697,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0945,
RX: undefined,
IM3: undefined,
IM5: -341.55054,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0964,
RX: undefined,
IM3: undefined,
IM5: -340.8459,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.0984,
RX: undefined,
IM3: undefined,
IM5: -340.1552,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1003,
RX: undefined,
IM3: undefined,
IM5: -339.4779,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1023,
RX: undefined,
IM3: undefined,
IM5: -338.81354,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1045,
RX: undefined,
IM3: undefined,
IM5: -338.16162,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1064,
RX: undefined,
IM3: undefined,
IM5: -337.52167,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1084,
RX: undefined,
IM3: undefined,
IM5: -336.89325,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1104,
RX: undefined,
IM3: undefined,
IM5: -336.27597,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1123,
RX: undefined,
IM3: undefined,
IM5: -335.66946,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1145,
RX: undefined,
IM3: undefined,
IM5: -335.07333,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1165,
RX: undefined,
IM3: undefined,
IM5: -334.48724,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1184,
RX: undefined,
IM3: undefined,
IM5: -333.91086,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1204,
RX: undefined,
IM3: undefined,
IM5: -333.34384,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1223,
RX: undefined,
IM3: undefined,
IM5: -332.78595,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1245,
RX: undefined,
IM3: undefined,
IM5: -332.23685,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1265,
RX: undefined,
IM3: undefined,
IM5: -331.6963,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1284,
RX: undefined,
IM3: undefined,
IM5: -331.164,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1304,
RX: undefined,
IM3: undefined,
IM5: -330.6397,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1323,
RX: undefined,
IM3: undefined,
IM5: -330.12323,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1343,
RX: undefined,
IM3: undefined,
IM5: -329.6143,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1365,
RX: undefined,
IM3: undefined,
IM5: -329.1127,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1394,
RX: undefined,
IM3: undefined,
IM5: -328.37363,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1423,
RX: undefined,
IM3: undefined,
IM5: -327.64996,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1455,
RX: undefined,
IM3: undefined,
IM5: -326.941,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1484,
RX: undefined,
IM3: undefined,
IM5: -326.24625,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1514,
RX: undefined,
IM3: undefined,
IM5: -325.5651,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1523,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -244.40846,
IM9: undefined
},
{
frequency: 2056.1543,
RX: undefined,
IM3: undefined,
IM5: -324.89703,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1575,
RX: undefined,
IM3: undefined,
IM5: -324.24158,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1604,
RX: undefined,
IM3: undefined,
IM5: -323.59824,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1633,
RX: undefined,
IM3: undefined,
IM5: -322.96658,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1665,
RX: undefined,
IM3: undefined,
IM5: -322.34622,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1694,
RX: undefined,
IM3: undefined,
IM5: -321.73672,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1724,
RX: undefined,
IM3: undefined,
IM5: -321.13776,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1753,
RX: undefined,
IM3: undefined,
IM5: -320.5489,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1785,
RX: undefined,
IM3: undefined,
IM5: -319.96988,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1814,
RX: undefined,
IM3: undefined,
IM5: -319.40033,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1843,
RX: undefined,
IM3: undefined,
IM5: -318.84,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1875,
RX: undefined,
IM3: undefined,
IM5: -318.2885,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1904,
RX: undefined,
IM3: undefined,
IM5: -317.74567,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1934,
RX: undefined,
IM3: undefined,
IM5: -317.21118,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1963,
RX: undefined,
IM3: undefined,
IM5: -316.68475,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.1995,
RX: undefined,
IM3: undefined,
IM5: -316.16623,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2024,
RX: undefined,
IM3: undefined,
IM5: -315.6553,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2053,
RX: undefined,
IM3: undefined,
IM5: -315.15176,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2095,
RX: undefined,
IM3: undefined,
IM5: -314.49158,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2134,
RX: undefined,
IM3: undefined,
IM5: -313.84366,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2173,
RX: undefined,
IM3: undefined,
IM5: -313.20764,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2214,
RX: undefined,
IM3: undefined,
IM5: -312.58304,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2253,
RX: undefined,
IM3: undefined,
IM5: -311.96945,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2295,
RX: undefined,
IM3: undefined,
IM5: -311.36652,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2334,
RX: undefined,
IM3: undefined,
IM5: -310.77386,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2373,
RX: undefined,
IM3: undefined,
IM5: -310.19116,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2415,
RX: undefined,
IM3: undefined,
IM5: -309.61807,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2454,
RX: undefined,
IM3: undefined,
IM5: -309.0543,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2495,
RX: undefined,
IM3: undefined,
IM5: -308.49948,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2505,
RX: undefined,
IM3: -319.47638,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2534,
RX: undefined,
IM3: undefined,
IM5: -307.95343,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2573,
RX: undefined,
IM3: undefined,
IM5: -307.4158,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2615,
RX: undefined,
IM3: undefined,
IM5: -306.88635,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2654,
RX: undefined,
IM3: undefined,
IM5: -306.36487,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2693,
RX: undefined,
IM3: undefined,
IM5: -305.8511,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2734,
RX: undefined,
IM3: undefined,
IM5: -305.34482,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2783,
RX: undefined,
IM3: undefined,
IM5: -304.72217,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2834,
RX: undefined,
IM3: undefined,
IM5: -304.11047,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2883,
RX: undefined,
IM3: undefined,
IM5: -303.50934,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2935,
RX: undefined,
IM3: undefined,
IM5: -302.91846,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.2983,
RX: undefined,
IM3: undefined,
IM5: -302.33743,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3035,
RX: undefined,
IM3: undefined,
IM5: -301.766,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3083,
RX: undefined,
IM3: undefined,
IM5: -301.2038,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3135,
RX: undefined,
IM3: undefined,
IM5: -300.65054,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3184,
RX: undefined,
IM3: undefined,
IM5: -300.10596,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3235,
RX: undefined,
IM3: undefined,
IM5: -299.56976,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3284,
RX: undefined,
IM3: undefined,
IM5: -299.04175,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3335,
RX: undefined,
IM3: undefined,
IM5: -298.52164,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3384,
RX: undefined,
IM3: undefined,
IM5: -298.0092,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3435,
RX: undefined,
IM3: undefined,
IM5: -297.50418,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3494,
RX: undefined,
IM3: undefined,
IM5: -296.90768,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3555,
RX: undefined,
IM3: undefined,
IM5: -296.3213,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3613,
RX: undefined,
IM3: undefined,
IM5: -295.74463,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3674,
RX: undefined,
IM3: undefined,
IM5: -295.17737,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3733,
RX: undefined,
IM3: undefined,
IM5: -294.61923,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3794,
RX: undefined,
IM3: undefined,
IM5: -294.06992,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3855,
RX: undefined,
IM3: undefined,
IM5: -293.52914,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3914,
RX: undefined,
IM3: undefined,
IM5: -292.99664,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.3975,
RX: undefined,
IM3: undefined,
IM5: -292.47223,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4033,
RX: undefined,
IM3: undefined,
IM5: -291.95557,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4094,
RX: undefined,
IM3: undefined,
IM5: -291.4465,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4153,
RX: undefined,
IM3: undefined,
IM5: -290.94476,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4224,
RX: undefined,
IM3: undefined,
IM5: -290.36844,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4294,
RX: undefined,
IM3: undefined,
IM5: -289.8015,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4363,
RX: undefined,
IM3: undefined,
IM5: -289.24368,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4434,
RX: undefined,
IM3: undefined,
IM5: -288.69467,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4504,
RX: undefined,
IM3: undefined,
IM5: -288.1542,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4573,
RX: undefined,
IM3: undefined,
IM5: -287.62204,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4644,
RX: undefined,
IM3: undefined,
IM5: -287.09787,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4714,
RX: undefined,
IM3: undefined,
IM5: -286.5815,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4783,
RX: undefined,
IM3: undefined,
IM5: -286.0727,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4854,
RX: undefined,
IM3: undefined,
IM5: -285.57123,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.4934,
RX: undefined,
IM3: undefined,
IM5: -285.00687,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5015,
RX: undefined,
IM3: undefined,
IM5: -284.4515,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5093,
RX: undefined,
IM3: undefined,
IM5: -283.90488,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5173,
RX: undefined,
IM3: undefined,
IM5: -283.36673,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5254,
RX: undefined,
IM3: undefined,
IM5: -282.8368,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5334,
RX: undefined,
IM3: undefined,
IM5: -282.31482,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5415,
RX: undefined,
IM3: undefined,
IM5: -281.80054,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -305.51074
},
{
frequency: 2056.5493,
RX: undefined,
IM3: undefined,
IM5: -281.2938,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5583,
RX: undefined,
IM3: undefined,
IM5: -280.7324,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5654,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -243.9074,
IM9: undefined
},
{
frequency: 2056.5674,
RX: undefined,
IM3: undefined,
IM5: -280.17993,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5764,
RX: undefined,
IM3: undefined,
IM5: -279.6361,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5854,
RX: undefined,
IM3: undefined,
IM5: -279.10065,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.5945,
RX: undefined,
IM3: undefined,
IM5: -278.57333,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6033,
RX: undefined,
IM3: undefined,
IM5: -278.0539,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6123,
RX: undefined,
IM3: undefined,
IM5: -277.5421,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6213,
RX: undefined,
IM3: undefined,
IM5: -277.03778,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6313,
RX: undefined,
IM3: undefined,
IM5: -276.48584,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6414,
RX: undefined,
IM3: undefined,
IM5: -275.94254,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6514,
RX: undefined,
IM3: undefined,
IM5: -275.4076,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6614,
RX: undefined,
IM3: undefined,
IM5: -274.88077,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6714,
RX: undefined,
IM3: undefined,
IM5: -274.36182,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6743,
RX: undefined,
IM3: -318.9751,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6814,
RX: undefined,
IM3: undefined,
IM5: -273.8505,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.6914,
RX: undefined,
IM3: undefined,
IM5: -273.3466,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.7024,
RX: undefined,
IM3: undefined,
IM5: -272.8006,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.7134,
RX: undefined,
IM3: undefined,
IM5: -272.26306,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.7244,
RX: undefined,
IM3: undefined,
IM5: -271.7337,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.7354,
RX: undefined,
IM3: undefined,
IM5: -271.2123,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.7463,
RX: undefined,
IM3: undefined,
IM5: -270.69864,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.7573,
RX: undefined,
IM3: undefined,
IM5: -270.1924,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.7693,
RX: undefined,
IM3: undefined,
IM5: -269.64847,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.7815,
RX: undefined,
IM3: undefined,
IM5: -269.1129,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.7935,
RX: undefined,
IM3: undefined,
IM5: -268.58548,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.8054,
RX: undefined,
IM3: undefined,
IM5: -268.06595,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.8174,
RX: undefined,
IM3: undefined,
IM5: -267.55408,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.8293,
RX: undefined,
IM3: undefined,
IM5: -267.04962,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.8423,
RX: undefined,
IM3: undefined,
IM5: -266.51126,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.8555,
RX: undefined,
IM3: undefined,
IM5: -265.98114,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.8684,
RX: undefined,
IM3: undefined,
IM5: -265.45895,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.8813,
RX: undefined,
IM3: undefined,
IM5: -264.94452,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.8943,
RX: undefined,
IM3: undefined,
IM5: -264.4376,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.9084,
RX: undefined,
IM3: undefined,
IM5: -263.8998,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.9224,
RX: undefined,
IM3: undefined,
IM5: -263.37024,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.9363,
RX: undefined,
IM3: undefined,
IM5: -262.8486,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.9504,
RX: undefined,
IM3: undefined,
IM5: -262.3347,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.9644,
RX: undefined,
IM3: undefined,
IM5: -261.82828,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.9795,
RX: undefined,
IM3: undefined,
IM5: -261.29373,
IM7: undefined,
IM9: undefined
},
{
frequency: 2056.9915,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -243.40721,
IM9: undefined
},
{
frequency: 2056.9944,
RX: undefined,
IM3: undefined,
IM5: -260.7673,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.0093,
RX: undefined,
IM3: undefined,
IM5: -260.24875,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.0244,
RX: undefined,
IM3: undefined,
IM5: -259.7378,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.0393,
RX: undefined,
IM3: undefined,
IM5: -259.23425,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -305.07962
},
{
frequency: 2057.0554,
RX: undefined,
IM3: undefined,
IM5: -258.70508,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.0713,
RX: undefined,
IM3: undefined,
IM5: -258.18384,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.0874,
RX: undefined,
IM3: undefined,
IM5: -257.6703,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.1033,
RX: undefined,
IM3: undefined,
IM5: -257.1642,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.1204,
RX: undefined,
IM3: undefined,
IM5: -256.6345,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.1245,
RX: undefined,
IM3: -318.47354,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.1375,
RX: undefined,
IM3: undefined,
IM5: -256.1127,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.1543,
RX: undefined,
IM3: undefined,
IM5: -255.59866,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.1714,
RX: undefined,
IM3: undefined,
IM5: -255.0921,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.1895,
RX: undefined,
IM3: undefined,
IM5: -254.56366,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.2073,
RX: undefined,
IM3: undefined,
IM5: -254.04315,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.2253,
RX: undefined,
IM3: undefined,
IM5: -253.53032,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.2434,
RX: undefined,
IM3: undefined,
IM5: -253.02495,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.2625,
RX: undefined,
IM3: undefined,
IM5: -252.49936,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.2815,
RX: undefined,
IM3: undefined,
IM5: -251.9816,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.3003,
RX: undefined,
IM3: undefined,
IM5: -251.47145,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.3193,
RX: undefined,
IM3: undefined,
IM5: -250.96867,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.3394,
RX: undefined,
IM3: undefined,
IM5: -250.44719,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.3594,
RX: undefined,
IM3: undefined,
IM5: -249.93341,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.3794,
RX: undefined,
IM3: undefined,
IM5: -249.42712,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.4004,
RX: undefined,
IM3: undefined,
IM5: -248.90334,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.4214,
RX: undefined,
IM3: undefined,
IM5: -248.38733,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.4314,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -242.90688,
IM9: undefined
},
{
frequency: 2057.4424,
RX: undefined,
IM3: undefined,
IM5: -247.87889,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.4634,
RX: undefined,
IM3: undefined,
IM5: -247.37776,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.4854,
RX: undefined,
IM3: undefined,
IM5: -246.86043,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.5073,
RX: undefined,
IM3: undefined,
IM5: -246.35068,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.5293,
RX: undefined,
IM3: undefined,
IM5: -245.8483,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -304.65717
},
{
frequency: 2057.5525,
RX: undefined,
IM3: undefined,
IM5: -245.33073,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.5754,
RX: undefined,
IM3: undefined,
IM5: -244.82077,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.5984,
RX: undefined,
IM3: undefined,
IM5: -244.31818,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.6094,
RX: undefined,
IM3: -317.97098,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.6223,
RX: undefined,
IM3: undefined,
IM5: -243.80138,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.6465,
RX: undefined,
IM3: undefined,
IM5: -243.29214,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.6704,
RX: undefined,
IM3: undefined,
IM5: -242.79027,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.6953,
RX: undefined,
IM3: undefined,
IM5: -242.27509,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.7205,
RX: undefined,
IM3: undefined,
IM5: -241.76743,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.7454,
RX: undefined,
IM3: undefined,
IM5: -241.26707,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.7715,
RX: undefined,
IM3: undefined,
IM5: -240.75424,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.7974,
RX: undefined,
IM3: undefined,
IM5: -240.24887,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.8245,
RX: undefined,
IM3: undefined,
IM5: -239.73174,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.8513,
RX: undefined,
IM3: undefined,
IM5: -239.22218,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.8784,
RX: undefined,
IM3: undefined,
IM5: -238.71999,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.8855,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -242.4063,
IM9: undefined
},
{
frequency: 2057.9065,
RX: undefined,
IM3: undefined,
IM5: -238.20676,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.9343,
RX: undefined,
IM3: undefined,
IM5: -237.70099,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.9634,
RX: undefined,
IM3: undefined,
IM5: -237.18481,
IM7: undefined,
IM9: undefined
},
{
frequency: 2057.9924,
RX: undefined,
IM3: undefined,
IM5: -236.6762,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.0215,
RX: undefined,
IM3: undefined,
IM5: -236.17491,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -304.24286
},
{
frequency: 2058.0515,
RX: undefined,
IM3: undefined,
IM5: -235.66383,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.0813,
RX: undefined,
IM3: undefined,
IM5: -235.16017,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.1094,
RX: undefined,
IM3: -317.48886,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.1123,
RX: undefined,
IM3: undefined,
IM5: -234.64728,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.1433,
RX: undefined,
IM3: undefined,
IM5: -234.14186,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.1753,
RX: undefined,
IM3: undefined,
IM5: -233.62772,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.2073,
RX: undefined,
IM3: undefined,
IM5: -233.12108,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.2405,
RX: undefined,
IM3: undefined,
IM5: -232.60625,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.2734,
RX: undefined,
IM3: undefined,
IM5: -232.0989,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.3064,
RX: undefined,
IM3: undefined,
IM5: -231.59889,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.3403,
RX: undefined,
IM3: undefined,
IM5: -231.09113,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.3523,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -241.90611,
IM9: undefined
},
{
frequency: 2058.3745,
RX: undefined,
IM3: undefined,
IM5: -230.59068,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.4094,
RX: undefined,
IM3: undefined,
IM5: -230.08295,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.4443,
RX: undefined,
IM3: undefined,
IM5: -229.5825,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.4805,
RX: undefined,
IM3: undefined,
IM5: -229.0752,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.5164,
RX: undefined,
IM3: undefined,
IM5: -228.57518,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -303.8361
},
{
frequency: 2058.5535,
RX: undefined,
IM3: undefined,
IM5: -228.06866,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.5913,
RX: undefined,
IM3: undefined,
IM5: -227.55603,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.6094,
RX: undefined,
IM3: -317.02765,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.6294,
RX: undefined,
IM3: undefined,
IM5: -227.05086,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.6685,
RX: undefined,
IM3: undefined,
IM5: -226.53992,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.7073,
RX: undefined,
IM3: undefined,
IM5: -226.03638,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.7473,
RX: undefined,
IM3: undefined,
IM5: -225.52739,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.7874,
RX: undefined,
IM3: undefined,
IM5: -225.02576,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.8284,
RX: undefined,
IM3: undefined,
IM5: -224.519,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.8323,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -241.40543,
IM9: undefined
},
{
frequency: 2058.8704,
RX: undefined,
IM3: undefined,
IM5: -224.00743,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.9124,
RX: undefined,
IM3: undefined,
IM5: -223.50328,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.9553,
RX: undefined,
IM3: undefined,
IM5: -222.9946,
IM7: undefined,
IM9: undefined
},
{
frequency: 2058.9983,
RX: undefined,
IM3: undefined,
IM5: -222.49326,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.0425,
RX: undefined,
IM3: undefined,
IM5: -221.98764,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -303.4362
},
{
frequency: 2059.0874,
RX: undefined,
IM3: undefined,
IM5: -221.47803,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.1094,
RX: undefined,
IM3: -316.5872,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.1323,
RX: undefined,
IM3: undefined,
IM5: -220.97578,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.1785,
RX: undefined,
IM3: undefined,
IM5: -220.46977,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.2253,
RX: undefined,
IM3: undefined,
IM5: -219.96027,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.2725,
RX: undefined,
IM3: undefined,
IM5: -219.45811,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.3203,
RX: undefined,
IM3: undefined,
IM5: -218.95267,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.3235,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -240.90501,
IM9: undefined
},
{
frequency: 2059.3694,
RX: undefined,
IM3: undefined,
IM5: -218.44417,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.4185,
RX: undefined,
IM3: undefined,
IM5: -217.943,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.4685,
RX: undefined,
IM3: undefined,
IM5: -217.43895,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.5193,
RX: undefined,
IM3: undefined,
IM5: -216.93224,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -303.0425
},
{
frequency: 2059.5713,
RX: undefined,
IM3: undefined,
IM5: -216.4231,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.6094,
RX: undefined,
IM3: -316.17508,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.6233,
RX: undefined,
IM3: undefined,
IM5: -215.92131,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.6765,
RX: undefined,
IM3: undefined,
IM5: -215.41722,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.7305,
RX: undefined,
IM3: undefined,
IM5: -214.91103,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.7854,
RX: undefined,
IM3: undefined,
IM5: -214.40294,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.8235,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -240.40509,
IM9: undefined
},
{
frequency: 2059.8403,
RX: undefined,
IM3: undefined,
IM5: -213.90218,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.8965,
RX: undefined,
IM3: undefined,
IM5: -213.39961,
IM7: undefined,
IM9: undefined
},
{
frequency: 2059.9534,
RX: undefined,
IM3: undefined,
IM5: -212.89543,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.0115,
RX: undefined,
IM3: undefined,
IM5: -212.3898,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -302.65427
},
{
frequency: 2060.0703,
RX: undefined,
IM3: undefined,
IM5: -211.8829,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.1094,
RX: undefined,
IM3: -315.77747,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.1304,
RX: undefined,
IM3: undefined,
IM5: -211.3749,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.1904,
RX: undefined,
IM3: undefined,
IM5: -210.87419,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.2515,
RX: undefined,
IM3: undefined,
IM5: -210.37244,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.3135,
RX: undefined,
IM3: undefined,
IM5: -209.86978,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.3235,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -239.91234,
IM9: undefined
},
{
frequency: 2060.3765,
RX: undefined,
IM3: undefined,
IM5: -209.36636,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.4404,
RX: undefined,
IM3: undefined,
IM5: -208.8623,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.5054,
RX: undefined,
IM3: undefined,
IM5: -208.35776,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -302.27078
},
{
frequency: 2060.5713,
RX: undefined,
IM3: undefined,
IM5: -207.85283,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.6094,
RX: undefined,
IM3: -315.39545,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.6384,
RX: undefined,
IM3: undefined,
IM5: -207.34766,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.7063,
RX: undefined,
IM3: undefined,
IM5: -206.84233,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.7754,
RX: undefined,
IM3: undefined,
IM5: -206.33699,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.8235,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -239.4242,
IM9: undefined
},
{
frequency: 2060.8455,
RX: undefined,
IM3: undefined,
IM5: -205.83173,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.9165,
RX: undefined,
IM3: undefined,
IM5: -205.32664,
IM7: undefined,
IM9: undefined
},
{
frequency: 2060.9883,
RX: undefined,
IM3: undefined,
IM5: -204.82184,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -301.89136
},
{
frequency: 2061.0613,
RX: undefined,
IM3: undefined,
IM5: -204.3174,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.1094,
RX: undefined,
IM3: -315.024,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.1355,
RX: undefined,
IM3: undefined,
IM5: -203.81342,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.2104,
RX: undefined,
IM3: undefined,
IM5: -203.30997,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.2864,
RX: undefined,
IM3: undefined,
IM5: -202.80716,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.3235,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -238.93823,
IM9: undefined
},
{
frequency: 2061.3633,
RX: undefined,
IM3: undefined,
IM5: -202.30504,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.4414,
RX: undefined,
IM3: undefined,
IM5: -201.80368,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.5205,
RX: undefined,
IM3: undefined,
IM5: -201.30318,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -301.5152
},
{
frequency: 2061.6013,
RX: undefined,
IM3: undefined,
IM5: -200.79738,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.6094,
RX: undefined,
IM3: -314.65613,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.6833,
RX: undefined,
IM3: undefined,
IM5: -200.29272,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.7664,
RX: undefined,
IM3: undefined,
IM5: -199.78926,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.8235,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -238.45213,
IM9: undefined
},
{
frequency: 2061.8503,
RX: undefined,
IM3: undefined,
IM5: -199.28708,
IM7: undefined,
IM9: undefined
},
{
frequency: 2061.9353,
RX: undefined,
IM3: undefined,
IM5: -198.78618,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.0225,
RX: undefined,
IM3: undefined,
IM5: -198.28087,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -301.14175
},
{
frequency: 2062.1094,
RX: undefined,
IM3: -314.30835,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.1104,
RX: undefined,
IM3: undefined,
IM5: -197.77713,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.1995,
RX: undefined,
IM3: undefined,
IM5: -197.27498,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.2893,
RX: undefined,
IM3: undefined,
IM5: -196.77446,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.3235,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -237.96384,
IM9: undefined
},
{
frequency: 2062.3813,
RX: undefined,
IM3: undefined,
IM5: -196.27017,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.4744,
RX: undefined,
IM3: undefined,
IM5: -195.76773,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -300.77032
},
{
frequency: 2062.5684,
RX: undefined,
IM3: undefined,
IM5: -195.26717,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.6094,
RX: undefined,
IM3: -313.9677,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.6643,
RX: undefined,
IM3: undefined,
IM5: -194.76328,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.7615,
RX: undefined,
IM3: undefined,
IM5: -194.26146,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.8235,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -237.47154,
IM9: undefined
},
{
frequency: 2062.8604,
RX: undefined,
IM3: undefined,
IM5: -193.75667,
IM7: undefined,
IM9: undefined
},
{
frequency: 2062.9604,
RX: undefined,
IM3: undefined,
IM5: -193.25412,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -300.40042
},
{
frequency: 2063.0615,
RX: undefined,
IM3: undefined,
IM5: -192.75381,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.1094,
RX: undefined,
IM3: -313.6485,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.1643,
RX: undefined,
IM3: undefined,
IM5: -192.2509,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.2683,
RX: undefined,
IM3: undefined,
IM5: -191.7504,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.3235,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -236.97377,
IM9: undefined
},
{
frequency: 2063.3745,
RX: undefined,
IM3: undefined,
IM5: -191.24759,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.4814,
RX: undefined,
IM3: undefined,
IM5: -190.7473,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -300.03156
},
{
frequency: 2063.5903,
RX: undefined,
IM3: undefined,
IM5: -190.24496,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.6094,
RX: undefined,
IM3: -313.36346,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.7014,
RX: undefined,
IM3: undefined,
IM5: -189.74077,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.8135,
RX: undefined,
IM3: undefined,
IM5: -189.23933,
IM7: undefined,
IM9: undefined
},
{
frequency: 2063.8193,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -236.47346,
IM9: undefined
},
{
frequency: 2063.9275,
RX: undefined,
IM3: undefined,
IM5: -188.73628,
IM7: undefined,
IM9: undefined
},
{
frequency: 2064.0425,
RX: undefined,
IM3: undefined,
IM5: -188.23608,
IM7: undefined,
IM9: undefined
},
{
frequency: 2064.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -299.6634
},
{
frequency: 2064.1094,
RX: undefined,
IM3: -313.131,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2064.1594,
RX: undefined,
IM3: undefined,
IM5: -187.73447,
IM7: undefined,
IM9: undefined
},
{
frequency: 2064.2783,
RX: undefined,
IM3: undefined,
IM5: -187.2316,
IM7: undefined,
IM9: undefined
},
{
frequency: 2064.3083,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -235.97318,
IM9: undefined
},
{
frequency: 2064.3994,
RX: undefined,
IM3: undefined,
IM5: -186.72765,
IM7: undefined,
IM9: undefined
},
{
frequency: 2064.5215,
RX: undefined,
IM3: undefined,
IM5: -186.2268,
IM7: undefined,
IM9: undefined
},
{
frequency: 2064.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -299.2956
},
{
frequency: 2064.6094,
RX: undefined,
IM3: -312.9412,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2064.6455,
RX: undefined,
IM3: undefined,
IM5: -185.72505,
IM7: undefined,
IM9: undefined
},
{
frequency: 2064.7715,
RX: undefined,
IM3: undefined,
IM5: -185.22253,
IM7: undefined,
IM9: undefined
},
{
frequency: 2064.7903,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -235.47292,
IM9: undefined
},
{
frequency: 2064.8994,
RX: undefined,
IM3: undefined,
IM5: -184.71936,
IM7: undefined,
IM9: undefined
},
{
frequency: 2065.0293,
RX: undefined,
IM3: undefined,
IM5: -184.21568,
IM7: undefined,
IM9: undefined
},
{
frequency: 2065.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -298.92804
},
{
frequency: 2065.1094,
RX: undefined,
IM3: -312.76614,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2065.1604,
RX: undefined,
IM3: undefined,
IM5: -183.71541,
IM7: undefined,
IM9: undefined
},
{
frequency: 2065.2664,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -234.97198,
IM9: undefined
},
{
frequency: 2065.2935,
RX: undefined,
IM3: undefined,
IM5: -183.21477,
IM7: undefined,
IM9: undefined
},
{
frequency: 2065.4285,
RX: undefined,
IM3: undefined,
IM5: -182.71387,
IM7: undefined,
IM9: undefined
},
{
frequency: 2065.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -298.56064
},
{
frequency: 2065.5654,
RX: undefined,
IM3: undefined,
IM5: -182.21281,
IM7: undefined,
IM9: undefined
},
{
frequency: 2065.6094,
RX: undefined,
IM3: -312.60495,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2065.7043,
RX: undefined,
IM3: undefined,
IM5: -181.71173,
IM7: undefined,
IM9: undefined
},
{
frequency: 2065.7363,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -234.47107,
IM9: undefined
},
{
frequency: 2065.8455,
RX: undefined,
IM3: undefined,
IM5: -181.21071,
IM7: undefined,
IM9: undefined
},
{
frequency: 2065.9885,
RX: undefined,
IM3: undefined,
IM5: -180.70987,
IM7: undefined,
IM9: undefined
},
{
frequency: 2066.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -298.19342
},
{
frequency: 2066.1094,
RX: undefined,
IM3: -312.45264,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2066.1333,
RX: undefined,
IM3: undefined,
IM5: -180.20927,
IM7: undefined,
IM9: undefined
},
{
frequency: 2066.2004,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -233.97104,
IM9: undefined
},
{
frequency: 2066.2805,
RX: undefined,
IM3: undefined,
IM5: -179.70908,
IM7: undefined,
IM9: undefined
},
{
frequency: 2066.4304,
RX: undefined,
IM3: undefined,
IM5: -179.20605,
IM7: undefined,
IM9: undefined
},
{
frequency: 2066.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -297.82654
},
{
frequency: 2066.5825,
RX: undefined,
IM3: undefined,
IM5: -178.70381,
IM7: undefined,
IM9: undefined
},
{
frequency: 2066.6094,
RX: undefined,
IM3: -312.30414,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2066.6604,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -233.47081,
IM9: undefined
},
{
frequency: 2066.7363,
RX: undefined,
IM3: undefined,
IM5: -178.20256,
IM7: undefined,
IM9: undefined
},
{
frequency: 2066.8923,
RX: undefined,
IM3: undefined,
IM5: -177.70251,
IM7: undefined,
IM9: undefined
},
{
frequency: 2067.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -297.46027
},
{
frequency: 2067.0515,
RX: undefined,
IM3: undefined,
IM5: -177.20078,
IM7: undefined,
IM9: undefined
},
{
frequency: 2067.1094,
RX: undefined,
IM3: -312.1595,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2067.1174,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -232.97052,
IM9: undefined
},
{
frequency: 2067.2134,
RX: undefined,
IM3: undefined,
IM5: -176.69772,
IM7: undefined,
IM9: undefined
},
{
frequency: 2067.3774,
RX: undefined,
IM3: undefined,
IM5: -176.1968,
IM7: undefined,
IM9: undefined
},
{
frequency: 2067.5444,
RX: undefined,
IM3: undefined,
IM5: -175.69527,
IM7: undefined,
IM9: -297.09485
},
{
frequency: 2067.5725,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -232.47034,
IM9: undefined
},
{
frequency: 2067.6094,
RX: undefined,
IM3: -312.01126,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2067.7144,
RX: undefined,
IM3: undefined,
IM5: -175.19354,
IM7: undefined,
IM9: undefined
},
{
frequency: 2067.8875,
RX: undefined,
IM3: undefined,
IM5: -174.69205,
IM7: undefined,
IM9: undefined
},
{
frequency: 2068.0273,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -231.96945,
IM9: undefined
},
{
frequency: 2068.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -296.73074
},
{
frequency: 2068.0635,
RX: undefined,
IM3: undefined,
IM5: -174.19118,
IM7: undefined,
IM9: undefined
},
{
frequency: 2068.1094,
RX: undefined,
IM3: -311.86505,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2068.2434,
RX: undefined,
IM3: undefined,
IM5: -173.6886,
IM7: undefined,
IM9: undefined
},
{
frequency: 2068.4265,
RX: undefined,
IM3: undefined,
IM5: -173.18755,
IM7: undefined,
IM9: undefined
},
{
frequency: 2068.4824,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -231.46931,
IM9: undefined
},
{
frequency: 2068.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -296.3684
},
{
frequency: 2068.6094,
RX: undefined,
IM3: -311.71976,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2068.6135,
RX: undefined,
IM3: undefined,
IM5: -172.68579,
IM7: undefined,
IM9: undefined
},
{
frequency: 2068.8044,
RX: undefined,
IM3: undefined,
IM5: -172.18388,
IM7: undefined,
IM9: undefined
},
{
frequency: 2068.9395,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -230.96922,
IM9: undefined
},
{
frequency: 2068.9995,
RX: undefined,
IM3: undefined,
IM5: -171.68237,
IM7: undefined,
IM9: undefined
},
{
frequency: 2069.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -296.0083
},
{
frequency: 2069.1094,
RX: undefined,
IM3: -311.5745,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2069.1985,
RX: undefined,
IM3: undefined,
IM5: -171.1818,
IM7: undefined,
IM9: undefined
},
{
frequency: 2069.4004,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -230.46857,
IM9: undefined
},
{
frequency: 2069.4023,
RX: undefined,
IM3: undefined,
IM5: -170.68025,
IM7: undefined,
IM9: undefined
},
{
frequency: 2069.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -295.65103
},
{
frequency: 2069.6094,
RX: undefined,
IM3: -311.42938,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2069.6113,
RX: undefined,
IM3: undefined,
IM5: -170.17842,
IM7: undefined,
IM9: undefined
},
{
frequency: 2069.8254,
RX: undefined,
IM3: undefined,
IM5: -169.67702,
IM7: undefined,
IM9: undefined
},
{
frequency: 2069.8665,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -229.96793,
IM9: undefined
},
{
frequency: 2070.0444,
RX: undefined,
IM3: undefined,
IM5: -169.1767,
IM7: undefined,
IM9: -295.29712
},
{
frequency: 2070.1094,
RX: undefined,
IM3: -311.2793,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2070.2695,
RX: undefined,
IM3: undefined,
IM5: -168.67592,
IM7: undefined,
IM9: undefined
},
{
frequency: 2070.3384,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -229.46793,
IM9: undefined
},
{
frequency: 2070.5005,
RX: undefined,
IM3: undefined,
IM5: -168.17554,
IM7: undefined,
IM9: undefined
},
{
frequency: 2070.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -294.94714
},
{
frequency: 2070.6094,
RX: undefined,
IM3: -311.13327,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2070.7385,
RX: undefined,
IM3: undefined,
IM5: -167.67429,
IM7: undefined,
IM9: undefined
},
{
frequency: 2070.8193,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -228.96722,
IM9: undefined
},
{
frequency: 2070.9834,
RX: undefined,
IM3: undefined,
IM5: -167.17317,
IM7: undefined,
IM9: undefined
},
{
frequency: 2071.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -294.60165
},
{
frequency: 2071.1094,
RX: undefined,
IM3: -311.00287,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2071.2363,
RX: undefined,
IM3: undefined,
IM5: -166.67123,
IM7: undefined,
IM9: undefined
},
{
frequency: 2071.3103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -228.4668,
IM9: undefined
},
{
frequency: 2071.4973,
RX: undefined,
IM3: undefined,
IM5: -166.16963,
IM7: undefined,
IM9: undefined
},
{
frequency: 2071.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -294.26114
},
{
frequency: 2071.6094,
RX: undefined,
IM3: -310.90988,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2071.7664,
RX: undefined,
IM3: undefined,
IM5: -165.66954,
IM7: undefined,
IM9: undefined
},
{
frequency: 2071.8103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -227.96964,
IM9: undefined
},
{
frequency: 2072.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -293.92612
},
{
frequency: 2072.0454,
RX: undefined,
IM3: undefined,
IM5: -165.16861,
IM7: undefined,
IM9: undefined
},
{
frequency: 2072.1094,
RX: undefined,
IM3: -310.83926,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2072.3103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -227.48624,
IM9: undefined
},
{
frequency: 2072.3345,
RX: undefined,
IM3: undefined,
IM5: -164.6684,
IM7: undefined,
IM9: undefined
},
{
frequency: 2072.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -293.59702
},
{
frequency: 2072.6094,
RX: undefined,
IM3: -310.78824,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2072.6355,
RX: undefined,
IM3: undefined,
IM5: -164.1672,
IM7: undefined,
IM9: undefined
},
{
frequency: 2072.8103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -227.01761,
IM9: undefined
},
{
frequency: 2072.9485,
RX: undefined,
IM3: undefined,
IM5: -163.66704,
IM7: undefined,
IM9: undefined
},
{
frequency: 2073.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -293.2742
},
{
frequency: 2073.1094,
RX: undefined,
IM3: -310.76416,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2073.2754,
RX: undefined,
IM3: undefined,
IM5: -163.16692,
IM7: undefined,
IM9: undefined
},
{
frequency: 2073.3103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -226.56458,
IM9: undefined
},
{
frequency: 2073.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -292.95798
},
{
frequency: 2073.6094,
RX: undefined,
IM3: -310.76407,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2073.6184,
RX: undefined,
IM3: undefined,
IM5: -162.66643,
IM7: undefined,
IM9: undefined
},
{
frequency: 2073.8103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -226.1277,
IM9: undefined
},
{
frequency: 2073.9795,
RX: undefined,
IM3: undefined,
IM5: -162.16565,
IM7: undefined,
IM9: undefined
},
{
frequency: 2074.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -292.64862
},
{
frequency: 2074.1094,
RX: undefined,
IM3: -310.77783,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2074.3103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -225.70732,
IM9: undefined
},
{
frequency: 2074.3604,
RX: undefined,
IM3: undefined,
IM5: -161.6651,
IM7: undefined,
IM9: undefined
},
{
frequency: 2074.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -292.34622
},
{
frequency: 2074.6094,
RX: undefined,
IM3: -310.79318,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2074.7644,
RX: undefined,
IM3: undefined,
IM5: -161.16467,
IM7: undefined,
IM9: undefined
},
{
frequency: 2074.8103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -225.3036,
IM9: undefined
},
{
frequency: 2075.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -292.0509
},
{
frequency: 2075.1094,
RX: undefined,
IM3: -310.8103,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2075.1953,
RX: undefined,
IM3: undefined,
IM5: -160.66391,
IM7: undefined,
IM9: undefined
},
{
frequency: 2075.3103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -224.91644,
IM9: undefined
},
{
frequency: 2075.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -291.76263
},
{
frequency: 2075.6094,
RX: undefined,
IM3: -310.83066,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2075.6575,
RX: undefined,
IM3: undefined,
IM5: -160.16356,
IM7: undefined,
IM9: undefined
},
{
frequency: 2075.8103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -224.54553,
IM9: undefined
},
{
frequency: 2076.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -291.48132
},
{
frequency: 2076.1094,
RX: undefined,
IM3: -310.85452,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2076.1575,
RX: undefined,
IM3: undefined,
IM5: -159.66269,
IM7: undefined,
IM9: undefined
},
{
frequency: 2076.3103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -224.19037,
IM9: undefined
},
{
frequency: 2076.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -291.20685
},
{
frequency: 2076.6094,
RX: undefined,
IM3: -310.888,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2076.6575,
RX: undefined,
IM3: undefined,
IM5: -159.20209,
IM7: undefined,
IM9: undefined
},
{
frequency: 2076.8103,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -223.85023,
IM9: undefined
},
{
frequency: 2077.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -290.9389
},
{
frequency: 2077.1094,
RX: undefined,
IM3: -310.93295,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2077.1575,
RX: undefined,
IM3: undefined,
IM5: -158.77924,
IM7: undefined,
IM9: undefined
},
{
frequency: 2077.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -223.52425,
IM9: undefined
},
{
frequency: 2077.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -290.67722
},
{
frequency: 2077.6094,
RX: undefined,
IM3: -310.99023,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2077.6575,
RX: undefined,
IM3: undefined,
IM5: -158.3909,
IM7: undefined,
IM9: undefined
},
{
frequency: 2077.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -223.2113,
IM9: undefined
},
{
frequency: 2078.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -290.42142
},
{
frequency: 2078.1094,
RX: undefined,
IM3: -311.05847,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2078.1575,
RX: undefined,
IM3: undefined,
IM5: -158.0334,
IM7: undefined,
IM9: undefined
},
{
frequency: 2078.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -222.91013,
IM9: undefined
},
{
frequency: 2078.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -290.17105
},
{
frequency: 2078.6094,
RX: undefined,
IM3: -311.1232,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2078.6575,
RX: undefined,
IM3: undefined,
IM5: -157.70259,
IM7: undefined,
IM9: undefined
},
{
frequency: 2078.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -222.61931,
IM9: undefined
},
{
frequency: 2079.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -289.92563
},
{
frequency: 2079.1094,
RX: undefined,
IM3: -311.1834,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2079.1575,
RX: undefined,
IM3: undefined,
IM5: -157.394,
IM7: undefined,
IM9: undefined
},
{
frequency: 2079.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -222.33731,
IM9: undefined
},
{
frequency: 2079.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -289.68466
},
{
frequency: 2079.6094,
RX: undefined,
IM3: -311.25055,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2079.6575,
RX: undefined,
IM3: undefined,
IM5: -157.1028,
IM7: undefined,
IM9: undefined
},
{
frequency: 2079.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -222.06252,
IM9: undefined
},
{
frequency: 2080.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -289.4476
},
{
frequency: 2080.1094,
RX: undefined,
IM3: -311.32156,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2080.1575,
RX: undefined,
IM3: undefined,
IM5: -156.82388,
IM7: undefined,
IM9: undefined
},
{
frequency: 2080.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -221.79323,
IM9: undefined
},
{
frequency: 2080.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -289.21393
},
{
frequency: 2080.6094,
RX: undefined,
IM3: -311.40704,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2080.6575,
RX: undefined,
IM3: undefined,
IM5: -156.55186,
IM7: undefined,
IM9: undefined
},
{
frequency: 2080.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -221.5277,
IM9: undefined
},
{
frequency: 2081.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -288.98306
},
{
frequency: 2081.1094,
RX: undefined,
IM3: -311.4957,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2081.1575,
RX: undefined,
IM3: undefined,
IM5: -156.28111,
IM7: undefined,
IM9: undefined
},
{
frequency: 2081.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -221.26424,
IM9: undefined
},
{
frequency: 2081.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -288.7545
},
{
frequency: 2081.6094,
RX: undefined,
IM3: -311.54947,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2081.6575,
RX: undefined,
IM3: undefined,
IM5: -156.00581,
IM7: undefined,
IM9: undefined
},
{
frequency: 2081.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -221.00117,
IM9: undefined
},
{
frequency: 2082.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -288.52774
},
{
frequency: 2082.1094,
RX: undefined,
IM3: -311.55673,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2082.1575,
RX: undefined,
IM3: undefined,
IM5: -155.72012,
IM7: undefined,
IM9: undefined
},
{
frequency: 2082.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -220.73697,
IM9: undefined
},
{
frequency: 2082.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -288.3023
},
{
frequency: 2082.6094,
RX: undefined,
IM3: -311.51407,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2082.6575,
RX: undefined,
IM3: undefined,
IM5: -155.41818,
IM7: undefined,
IM9: undefined
},
{
frequency: 2082.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -220.47021,
IM9: undefined
},
{
frequency: 2082.9995,
RX: undefined,
IM3: -231.53886,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0005,
RX: undefined,
IM3: -221.9959,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0015,
RX: undefined,
IM3: -215.97516,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0024,
RX: undefined,
IM3: -211.53813,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0034,
RX: undefined,
IM3: -208.01628,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0044,
RX: undefined,
IM3: -205.0937,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0054,
RX: undefined,
IM3: -202.59491,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0063,
RX: undefined,
IM3: -200.41202,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0073,
RX: undefined,
IM3: -198.47382,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0085,
RX: undefined,
IM3: -196.7308,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0095,
RX: undefined,
IM3: -195.14719,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0105,
RX: undefined,
IM3: -193.69617,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0115,
RX: undefined,
IM3: -192.35722,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0125,
RX: undefined,
IM3: -191.11427,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0134,
RX: undefined,
IM3: -189.95444,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0144,
RX: undefined,
IM3: -188.86728,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0154,
RX: undefined,
IM3: -187.84422,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0164,
RX: undefined,
IM3: -186.87813,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0173,
RX: undefined,
IM3: -185.96298,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0186,
RX: undefined,
IM3: -185.09367,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0195,
RX: undefined,
IM3: -184.26581,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0205,
RX: undefined,
IM3: -183.47565,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0215,
RX: undefined,
IM3: -182.71986,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0225,
RX: undefined,
IM3: -181.99562,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0234,
RX: undefined,
IM3: -181.30038,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0244,
RX: undefined,
IM3: -180.63191,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0254,
RX: undefined,
IM3: -179.98822,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0264,
RX: undefined,
IM3: -179.36752,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0273,
RX: undefined,
IM3: -178.76826,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0283,
RX: undefined,
IM3: -178.189,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0295,
RX: undefined,
IM3: -177.62842,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0305,
RX: undefined,
IM3: -177.08537,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0315,
RX: undefined,
IM3: -176.55879,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0325,
RX: undefined,
IM3: -176.04771,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0344,
RX: undefined,
IM3: -175.06856,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0364,
RX: undefined,
IM3: -174.14168,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0383,
RX: undefined,
IM3: -173.26178,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0405,
RX: undefined,
IM3: -172.4243,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0425,
RX: undefined,
IM3: -171.62535,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0444,
RX: undefined,
IM3: -170.86154,
IM5: undefined,
IM7: undefined,
IM9: -288.07785
},
{
frequency: 2083.0464,
RX: undefined,
IM3: -170.1299,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0483,
RX: undefined,
IM3: -169.42784,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0505,
RX: undefined,
IM3: -168.75307,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0525,
RX: undefined,
IM3: -168.10352,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0544,
RX: undefined,
IM3: -167.47739,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0564,
RX: undefined,
IM3: -166.87305,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0583,
RX: undefined,
IM3: -166.28903,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0605,
RX: undefined,
IM3: -165.724,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0625,
RX: undefined,
IM3: -165.17679,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0645,
RX: undefined,
IM3: -164.64627,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0664,
RX: undefined,
IM3: -164.13148,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0693,
RX: undefined,
IM3: -163.38683,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0725,
RX: undefined,
IM3: -162.67279,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0754,
RX: undefined,
IM3: -161.98694,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0784,
RX: undefined,
IM3: -161.32715,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0815,
RX: undefined,
IM3: -160.6915,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0845,
RX: undefined,
IM3: -160.0783,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0874,
RX: undefined,
IM3: -159.486,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0903,
RX: undefined,
IM3: -158.91324,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0935,
RX: undefined,
IM3: -158.35875,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0964,
RX: undefined,
IM3: -157.82143,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.0994,
RX: undefined,
IM3: -157.30022,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1025,
RX: undefined,
IM3: -156.79419,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1064,
RX: undefined,
IM3: -156.14165,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1104,
RX: undefined,
IM3: -155.51273,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1145,
RX: undefined,
IM3: -154.90578,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1184,
RX: undefined,
IM3: -154.31932,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1223,
RX: undefined,
IM3: -153.75201,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1265,
RX: undefined,
IM3: -153.20265,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1304,
RX: undefined,
IM3: -152.67014,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1345,
RX: undefined,
IM3: -152.15346,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1384,
RX: undefined,
IM3: -151.6517,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1436,
RX: undefined,
IM3: -151.04424,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1484,
RX: undefined,
IM3: -150.45729,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1533,
RX: undefined,
IM3: -149.88953,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1575,
RX: undefined,
IM3: undefined,
IM5: -155.09433,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1584,
RX: undefined,
IM3: -149.33974,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1633,
RX: undefined,
IM3: -148.80681,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1685,
RX: undefined,
IM3: -148.28975,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1733,
RX: undefined,
IM3: -147.78763,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1794,
RX: undefined,
IM3: -147.20364,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1855,
RX: undefined,
IM3: -146.63866,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1914,
RX: undefined,
IM3: -146.09146,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.1975,
RX: undefined,
IM3: -145.56099,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2034,
RX: undefined,
IM3: -145.04623,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2104,
RX: undefined,
IM3: -144.46434,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2175,
RX: undefined,
IM3: -143.9013,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2244,
RX: undefined,
IM3: -143.35596,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2314,
RX: undefined,
IM3: -142.82721,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2385,
RX: undefined,
IM3: -142.31409,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2463,
RX: undefined,
IM3: -141.74562,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2544,
RX: undefined,
IM3: -141.19519,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2625,
RX: undefined,
IM3: -140.66165,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2705,
RX: undefined,
IM3: -140.14401,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2783,
RX: undefined,
IM3: -139.64136,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2874,
RX: undefined,
IM3: -139.09273,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.2964,
RX: undefined,
IM3: -138.5609,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.3054,
RX: undefined,
IM3: -138.04486,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -220.19966,
IM9: undefined
},
{
frequency: 2083.3145,
RX: undefined,
IM3: -137.54372,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.3245,
RX: undefined,
IM3: -137.00334,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.3345,
RX: undefined,
IM3: -136.47926,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.3445,
RX: undefined,
IM3: -135.97054,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.3555,
RX: undefined,
IM3: -135.42763,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.3665,
RX: undefined,
IM3: -134.90117,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.3774,
RX: undefined,
IM3: -134.3902,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.3894,
RX: undefined,
IM3: -133.8494,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.4014,
RX: undefined,
IM3: -133.32492,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.4133,
RX: undefined,
IM3: -132.81583,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.4265,
RX: undefined,
IM3: -132.28062,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.4395,
RX: undefined,
IM3: -131.76143,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.4524,
RX: undefined,
IM3: -131.25731,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.4666,
RX: undefined,
IM3: -130.73027,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.4805,
RX: undefined,
IM3: -130.21877,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.4954,
RX: undefined,
IM3: -129.68694,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.5105,
RX: undefined,
IM3: -129.1709,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.5254,
RX: undefined,
IM3: -128.66975,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.5415,
RX: undefined,
IM3: -128.15068,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -287.854
},
{
frequency: 2083.5574,
RX: undefined,
IM3: -127.64665,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.5745,
RX: undefined,
IM3: -127.12668,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.5916,
RX: undefined,
IM3: -126.621826,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.6094,
RX: undefined,
IM3: -126.1028,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.6274,
RX: undefined,
IM3: -125.59882,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.6465,
RX: undefined,
IM3: -125.08225,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.6575,
RX: undefined,
IM3: undefined,
IM5: -154.7435,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.6655,
RX: undefined,
IM3: -124.580605,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.6855,
RX: undefined,
IM3: -124.06774,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.7065,
RX: undefined,
IM3: -123.54506,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.7275,
RX: undefined,
IM3: -123.03764,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.7495,
RX: undefined,
IM3: -122.52149,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.7715,
RX: undefined,
IM3: -122.02024,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.7944,
RX: undefined,
IM3: -121.51122,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -219.92435,
IM9: undefined
},
{
frequency: 2083.8184,
RX: undefined,
IM3: -120.99551,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.8425,
RX: undefined,
IM3: -120.49467,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.8674,
RX: undefined,
IM3: -119.98787,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.8936,
RX: undefined,
IM3: -119.47603,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.9204,
RX: undefined,
IM3: -118.96,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.9475,
RX: undefined,
IM3: -118.458855,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2083.9753,
RX: undefined,
IM3: -117.95398,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.0044,
RX: undefined,
IM3: -117.4461,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.0344,
RX: undefined,
IM3: -116.935875,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -287.6305
},
{
frequency: 2084.0654,
RX: undefined,
IM3: -116.423935,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.0974,
RX: undefined,
IM3: -115.91084,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.1304,
RX: undefined,
IM3: -115.397125,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.1575,
RX: undefined,
IM3: undefined,
IM5: -154.36223,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.1646,
RX: undefined,
IM3: -114.88326,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.1995,
RX: undefined,
IM3: -114.3697,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.2354,
RX: undefined,
IM3: -113.85684,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.2725,
RX: undefined,
IM3: -113.345055,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.3105,
RX: undefined,
IM3: -112.83468,
IM5: undefined,
IM7: -219.64357,
IM9: undefined
},
{
frequency: 2084.3494,
RX: undefined,
IM3: -112.326004,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.3894,
RX: undefined,
IM3: -111.81932,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.4304,
RX: undefined,
IM3: -111.314865,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.4724,
RX: undefined,
IM3: -110.81286,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.5164,
RX: undefined,
IM3: -110.302055,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -287.40717
},
{
frequency: 2084.5615,
RX: undefined,
IM3: -109.79473,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.6074,
RX: undefined,
IM3: -109.29101,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.6545,
RX: undefined,
IM3: -108.79099,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.6575,
RX: undefined,
IM3: undefined,
IM5: -153.94904,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.7034,
RX: undefined,
IM3: -108.28458,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.7534,
RX: undefined,
IM3: -107.782616,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.8054,
RX: undefined,
IM3: -107.27552,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -219.3569,
IM9: undefined
},
{
frequency: 2084.8584,
RX: undefined,
IM3: -106.77346,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.9133,
RX: undefined,
IM3: -106.267365,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2084.9695,
RX: undefined,
IM3: -105.76678,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.0273,
RX: undefined,
IM3: -105.263084,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -287.1839
},
{
frequency: 2085.0874,
RX: undefined,
IM3: -104.75695,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.1494,
RX: undefined,
IM3: -104.24899,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.1575,
RX: undefined,
IM3: undefined,
IM5: -153.5042,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.2124,
RX: undefined,
IM3: -103.74762,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.2773,
RX: undefined,
IM3: -103.24506,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -219.06424,
IM9: undefined
},
{
frequency: 2085.3445,
RX: undefined,
IM3: -102.74183,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.4133,
RX: undefined,
IM3: -102.238365,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.4844,
RX: undefined,
IM3: -101.73511,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -286.96066
},
{
frequency: 2085.5574,
RX: undefined,
IM3: -101.232445,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.6323,
RX: undefined,
IM3: -100.73072,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.6575,
RX: undefined,
IM3: undefined,
IM5: -153.0295,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.7095,
RX: undefined,
IM3: -100.23026,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.7896,
RX: undefined,
IM3: -99.72514,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -218.76578,
IM9: undefined
},
{
frequency: 2085.8713,
RX: undefined,
IM3: -99.2222,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2085.9553,
RX: undefined,
IM3: -98.72166,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.0425,
RX: undefined,
IM3: -98.21801,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -286.73758
},
{
frequency: 2086.1313,
RX: undefined,
IM3: -97.71746,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.1565,
RX: undefined,
IM3: undefined,
IM5: -152.52888,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.2234,
RX: undefined,
IM3: -97.21477,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -218.462,
IM9: undefined
},
{
frequency: 2086.3184,
RX: undefined,
IM3: -96.71051,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.4155,
RX: undefined,
IM3: -96.210304,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.5154,
RX: undefined,
IM3: -95.70928,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -286.5148
},
{
frequency: 2086.6184,
RX: undefined,
IM3: -95.20791,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.6335,
RX: undefined,
IM3: undefined,
IM5: -152.02875,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.7244,
RX: undefined,
IM3: -94.706604,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -218.15367,
IM9: undefined
},
{
frequency: 2086.8335,
RX: undefined,
IM3: -94.20577,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2086.9456,
RX: undefined,
IM3: -93.705765,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -286.2925
},
{
frequency: 2087.0615,
RX: undefined,
IM3: -93.20264,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.0955,
RX: undefined,
IM3: undefined,
IM5: -151.52808,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.1804,
RX: undefined,
IM3: -92.70121,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.3035,
RX: undefined,
IM3: -92.19771,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -217.84178,
IM9: undefined
},
{
frequency: 2087.4294,
RX: undefined,
IM3: -91.69662,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -286.07104
},
{
frequency: 2087.5464,
RX: undefined,
IM3: undefined,
IM5: -151.02786,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.5593,
RX: undefined,
IM3: -91.19434,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.6934,
RX: undefined,
IM3: -90.691376,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -217.52753,
IM9: undefined
},
{
frequency: 2087.8315,
RX: undefined,
IM3: -90.18818,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.9734,
RX: undefined,
IM3: -89.68518,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2087.9915,
RX: undefined,
IM3: undefined,
IM5: -150.52715,
IM7: undefined,
IM9: undefined
},
{
frequency: 2088.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -285.85077
},
{
frequency: 2088.1194,
RX: undefined,
IM3: -89.18276,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2088.2695,
RX: undefined,
IM3: -88.68128,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2088.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -217.21225,
IM9: undefined
},
{
frequency: 2088.4233,
RX: undefined,
IM3: -88.18106,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2088.4333,
RX: undefined,
IM3: undefined,
IM5: -150.0266,
IM7: undefined,
IM9: undefined
},
{
frequency: 2088.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -285.63205
},
{
frequency: 2088.5825,
RX: undefined,
IM3: -87.679276,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2088.7463,
RX: undefined,
IM3: -87.17647,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2088.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -216.89742,
IM9: undefined
},
{
frequency: 2088.8755,
RX: undefined,
IM3: undefined,
IM5: -149.52655,
IM7: undefined,
IM9: undefined
},
{
frequency: 2088.9146,
RX: undefined,
IM3: -86.676056,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2089.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -285.4154
},
{
frequency: 2089.0874,
RX: undefined,
IM3: -86.175385,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2089.2654,
RX: undefined,
IM3: -85.67487,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2089.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -216.58453,
IM9: undefined
},
{
frequency: 2089.3215,
RX: undefined,
IM3: undefined,
IM5: -149.02602,
IM7: undefined,
IM9: undefined
},
{
frequency: 2089.4495,
RX: undefined,
IM3: -85.17222,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2089.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -285.20123
},
{
frequency: 2089.6384,
RX: undefined,
IM3: -84.670616,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2089.7744,
RX: undefined,
IM3: undefined,
IM5: -148.52527,
IM7: undefined,
IM9: undefined
},
{
frequency: 2089.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -216.27516,
IM9: undefined
},
{
frequency: 2089.8325,
RX: undefined,
IM3: -84.17038,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2090.0325,
RX: undefined,
IM3: -83.66932,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2090.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -284.99005
},
{
frequency: 2090.2375,
RX: undefined,
IM3: undefined,
IM5: -148.02477,
IM7: undefined,
IM9: undefined
},
{
frequency: 2090.2385,
RX: undefined,
IM3: -83.16791,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2090.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -215.9708,
IM9: undefined
},
{
frequency: 2090.4504,
RX: undefined,
IM3: -82.66657,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2090.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -284.78232
},
{
frequency: 2090.6685,
RX: undefined,
IM3: -82.1657,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2090.7144,
RX: undefined,
IM3: undefined,
IM5: -147.52438,
IM7: undefined,
IM9: undefined
},
{
frequency: 2090.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -215.67288,
IM9: undefined
},
{
frequency: 2090.8923,
RX: undefined,
IM3: -81.665665,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2091.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -284.5785
},
{
frequency: 2091.1235,
RX: undefined,
IM3: -81.16464,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2091.2104,
RX: undefined,
IM3: undefined,
IM5: -147.02362,
IM7: undefined,
IM9: undefined
},
{
frequency: 2091.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -215.38278,
IM9: undefined
},
{
frequency: 2091.3613,
RX: undefined,
IM3: -80.663124,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2091.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -284.37903
},
{
frequency: 2091.6064,
RX: undefined,
IM3: -80.16155,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2091.7104,
RX: undefined,
IM3: undefined,
IM5: -146.54182,
IM7: undefined,
IM9: undefined
},
{
frequency: 2091.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -215.10173,
IM9: undefined
},
{
frequency: 2091.8584,
RX: undefined,
IM3: -79.66032,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2092.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -284.1843
},
{
frequency: 2092.1174,
RX: undefined,
IM3: -79.159805,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2092.2104,
RX: undefined,
IM3: undefined,
IM5: -146.08565,
IM7: undefined,
IM9: undefined
},
{
frequency: 2092.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -214.8308,
IM9: undefined
},
{
frequency: 2092.3845,
RX: undefined,
IM3: -78.6585,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2092.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -283.9947
},
{
frequency: 2092.6594,
RX: undefined,
IM3: -78.15687,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2092.7104,
RX: undefined,
IM3: undefined,
IM5: -145.65727,
IM7: undefined,
IM9: undefined
},
{
frequency: 2092.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -214.57092,
IM9: undefined
},
{
frequency: 2092.9424,
RX: undefined,
IM3: -77.65533,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2093.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -283.81046
},
{
frequency: 2093.2104,
RX: undefined,
IM3: undefined,
IM5: -145.25873,
IM7: undefined,
IM9: undefined
},
{
frequency: 2093.2415,
RX: undefined,
IM3: -77.15533,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2093.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -214.32285,
IM9: undefined
},
{
frequency: 2093.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -283.63184
},
{
frequency: 2093.5806,
RX: undefined,
IM3: -76.65415,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2093.7104,
RX: undefined,
IM3: undefined,
IM5: -144.89174,
IM7: undefined,
IM9: undefined
},
{
frequency: 2093.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -214.08713,
IM9: undefined
},
{
frequency: 2093.9705,
RX: undefined,
IM3: -76.15314,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2094.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -283.45898
},
{
frequency: 2094.2104,
RX: undefined,
IM3: undefined,
IM5: -144.5573,
IM7: undefined,
IM9: undefined
},
{
frequency: 2094.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -213.8641,
IM9: undefined
},
{
frequency: 2094.4294,
RX: undefined,
IM3: -75.65246,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2094.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -283.29205
},
{
frequency: 2094.7104,
RX: undefined,
IM3: undefined,
IM5: -144.25557,
IM7: undefined,
IM9: undefined
},
{
frequency: 2094.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -213.65395,
IM9: undefined
},
{
frequency: 2094.9294,
RX: undefined,
IM3: -75.20128,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2095.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -283.131
},
{
frequency: 2095.2104,
RX: undefined,
IM3: undefined,
IM5: -143.98619,
IM7: undefined,
IM9: undefined
},
{
frequency: 2095.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -213.45659,
IM9: undefined
},
{
frequency: 2095.4294,
RX: undefined,
IM3: -74.83564,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2095.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -282.9758
},
{
frequency: 2095.7104,
RX: undefined,
IM3: undefined,
IM5: -143.74825,
IM7: undefined,
IM9: undefined
},
{
frequency: 2095.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -213.27177,
IM9: undefined
},
{
frequency: 2095.9294,
RX: undefined,
IM3: -74.54596,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2096.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -282.82635
},
{
frequency: 2096.2104,
RX: undefined,
IM3: undefined,
IM5: -143.54051,
IM7: undefined,
IM9: undefined
},
{
frequency: 2096.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -213.09903,
IM9: undefined
},
{
frequency: 2096.4294,
RX: undefined,
IM3: -74.32529,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2096.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -282.68243
},
{
frequency: 2096.7104,
RX: undefined,
IM3: undefined,
IM5: -143.36139,
IM7: undefined,
IM9: undefined
},
{
frequency: 2096.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -212.93773,
IM9: undefined
},
{
frequency: 2096.9294,
RX: undefined,
IM3: -74.16867,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2097.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -282.54382
},
{
frequency: 2097.2104,
RX: undefined,
IM3: undefined,
IM5: -143.20892,
IM7: undefined,
IM9: undefined
},
{
frequency: 2097.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -212.78705,
IM9: undefined
},
{
frequency: 2097.4294,
RX: undefined,
IM3: -74.072784,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2097.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -282.41016
},
{
frequency: 2097.7104,
RX: undefined,
IM3: undefined,
IM5: -143.08078,
IM7: undefined,
IM9: undefined
},
{
frequency: 2097.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -212.64601,
IM9: undefined
},
{
frequency: 2097.9294,
RX: undefined,
IM3: -74.03565,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2098.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -282.28113
},
{
frequency: 2098.2104,
RX: undefined,
IM3: undefined,
IM5: -142.97423,
IM7: undefined,
IM9: undefined
},
{
frequency: 2098.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -212.51347,
IM9: undefined
},
{
frequency: 2098.4294,
RX: undefined,
IM3: -74.05652,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2098.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -282.15628
},
{
frequency: 2098.7104,
RX: undefined,
IM3: undefined,
IM5: -142.88615,
IM7: undefined,
IM9: undefined
},
{
frequency: 2098.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -212.38818,
IM9: undefined
},
{
frequency: 2098.9294,
RX: undefined,
IM3: -74.13581,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2099.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -282.03522
},
{
frequency: 2099.2104,
RX: undefined,
IM3: undefined,
IM5: -142.81297,
IM7: undefined,
IM9: undefined
},
{
frequency: 2099.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -212.2688,
IM9: undefined
},
{
frequency: 2099.4294,
RX: undefined,
IM3: -74.27515,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2099.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -281.91745
},
{
frequency: 2099.7104,
RX: undefined,
IM3: undefined,
IM5: -142.75064,
IM7: undefined,
IM9: undefined
},
{
frequency: 2099.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -212.15388,
IM9: undefined
},
{
frequency: 2099.9294,
RX: undefined,
IM3: -74.47746,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2100.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -281.80252
},
{
frequency: 2100.2104,
RX: undefined,
IM3: undefined,
IM5: -142.69458,
IM7: undefined,
IM9: undefined
},
{
frequency: 2100.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -212.04198,
IM9: undefined
},
{
frequency: 2100.4294,
RX: undefined,
IM3: -74.71219,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2100.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -281.68994
},
{
frequency: 2100.7104,
RX: undefined,
IM3: undefined,
IM5: -142.63983,
IM7: undefined,
IM9: undefined
},
{
frequency: 2100.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -211.93161,
IM9: undefined
},
{
frequency: 2100.9294,
RX: undefined,
IM3: -74.92222,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2101.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -281.57928
},
{
frequency: 2101.2104,
RX: undefined,
IM3: undefined,
IM5: -142.58154,
IM7: undefined,
IM9: undefined
},
{
frequency: 2101.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -211.82138,
IM9: undefined
},
{
frequency: 2101.4294,
RX: undefined,
IM3: -75.10465,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2101.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -281.4701
},
{
frequency: 2101.7104,
RX: undefined,
IM3: undefined,
IM5: -142.51508,
IM7: undefined,
IM9: undefined
},
{
frequency: 2101.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -211.70995,
IM9: undefined
},
{
frequency: 2101.9294,
RX: undefined,
IM3: -75.25761,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2102.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -281.362
},
{
frequency: 2102.2104,
RX: undefined,
IM3: undefined,
IM5: -142.43616,
IM7: undefined,
IM9: undefined
},
{
frequency: 2102.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -211.59612,
IM9: undefined
},
{
frequency: 2102.4294,
RX: undefined,
IM3: -75.37945,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2102.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -281.25464
},
{
frequency: 2102.7104,
RX: undefined,
IM3: undefined,
IM5: -142.3408,
IM7: undefined,
IM9: undefined
},
{
frequency: 2102.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -211.47884,
IM9: undefined
},
{
frequency: 2102.9294,
RX: undefined,
IM3: -75.46882,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2103.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -281.14774
},
{
frequency: 2103.2104,
RX: undefined,
IM3: undefined,
IM5: -142.22546,
IM7: undefined,
IM9: undefined
},
{
frequency: 2103.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -211.35725,
IM9: undefined
},
{
frequency: 2103.4294,
RX: undefined,
IM3: -75.48673,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2103.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -281.04108
},
{
frequency: 2103.7104,
RX: undefined,
IM3: undefined,
IM5: -142.08716,
IM7: undefined,
IM9: undefined
},
{
frequency: 2103.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -211.23077,
IM9: undefined
},
{
frequency: 2103.9294,
RX: undefined,
IM3: -75.36963,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2104.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -280.93448
},
{
frequency: 2104.2104,
RX: undefined,
IM3: undefined,
IM5: -141.92401,
IM7: undefined,
IM9: undefined
},
{
frequency: 2104.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -211.09901,
IM9: undefined
},
{
frequency: 2104.4294,
RX: undefined,
IM3: -75.12186,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2104.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -280.82794
},
{
frequency: 2104.7104,
RX: undefined,
IM3: undefined,
IM5: -141.73535,
IM7: undefined,
IM9: undefined
},
{
frequency: 2104.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -210.96187,
IM9: undefined
},
{
frequency: 2104.9294,
RX: undefined,
IM3: -74.75426,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2105.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -280.7214
},
{
frequency: 2105.2104,
RX: undefined,
IM3: undefined,
IM5: -141.52171,
IM7: undefined,
IM9: undefined
},
{
frequency: 2105.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -210.81952,
IM9: undefined
},
{
frequency: 2105.4294,
RX: undefined,
IM3: -74.28164,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2105.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -280.61496
},
{
frequency: 2105.7104,
RX: undefined,
IM3: undefined,
IM5: -141.28467,
IM7: undefined,
IM9: undefined
},
{
frequency: 2105.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -210.67238,
IM9: undefined
},
{
frequency: 2105.8794,
RX: undefined,
IM3: -73.78053,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2106.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -280.5088
},
{
frequency: 2106.2104,
RX: undefined,
IM3: undefined,
IM5: -141.02673,
IM7: undefined,
IM9: undefined
},
{
frequency: 2106.2834,
RX: undefined,
IM3: -73.28047,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2106.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -210.5211,
IM9: undefined
},
{
frequency: 2106.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -280.40314
},
{
frequency: 2106.6604,
RX: undefined,
IM3: -72.779236,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2106.7104,
RX: undefined,
IM3: undefined,
IM5: -140.75114,
IM7: undefined,
IM9: undefined
},
{
frequency: 2106.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -210.36658,
IM9: undefined
},
{
frequency: 2107.0186,
RX: undefined,
IM3: -72.27871,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2107.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -280.29825
},
{
frequency: 2107.2104,
RX: undefined,
IM3: undefined,
IM5: -140.46175,
IM7: undefined,
IM9: undefined
},
{
frequency: 2107.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -210.20985,
IM9: undefined
},
{
frequency: 2107.3645,
RX: undefined,
IM3: -71.777306,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2107.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -280.1945
},
{
frequency: 2107.7014,
RX: undefined,
IM3: -71.2764,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2107.7104,
RX: undefined,
IM3: undefined,
IM5: -140.16278,
IM7: undefined,
IM9: undefined
},
{
frequency: 2107.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -210.05215,
IM9: undefined
},
{
frequency: 2108.0325,
RX: undefined,
IM3: -70.775764,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2108.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -280.09222
},
{
frequency: 2108.2104,
RX: undefined,
IM3: undefined,
IM5: -139.85869,
IM7: undefined,
IM9: undefined
},
{
frequency: 2108.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -209.89476,
IM9: undefined
},
{
frequency: 2108.3594,
RX: undefined,
IM3: -70.275604,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2108.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.99188
},
{
frequency: 2108.6846,
RX: undefined,
IM3: -69.7754,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2108.7104,
RX: undefined,
IM3: undefined,
IM5: -139.55392,
IM7: undefined,
IM9: undefined
},
{
frequency: 2108.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -209.73907,
IM9: undefined
},
{
frequency: 2109.0095,
RX: undefined,
IM3: -69.27411,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2109.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.89392
},
{
frequency: 2109.2104,
RX: undefined,
IM3: undefined,
IM5: -139.25298,
IM7: undefined,
IM9: undefined
},
{
frequency: 2109.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -209.58647,
IM9: undefined
},
{
frequency: 2109.3345,
RX: undefined,
IM3: -68.77345,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2109.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.79874
},
{
frequency: 2109.6604,
RX: undefined,
IM3: -68.27331,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2109.7104,
RX: undefined,
IM3: undefined,
IM5: -138.96024,
IM7: undefined,
IM9: undefined
},
{
frequency: 2109.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -209.43835,
IM9: undefined
},
{
frequency: 2109.9895,
RX: undefined,
IM3: -67.77187,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2110.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.70685
},
{
frequency: 2110.2104,
RX: undefined,
IM3: undefined,
IM5: -138.68008,
IM7: undefined,
IM9: undefined
},
{
frequency: 2110.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -209.29605,
IM9: undefined
},
{
frequency: 2110.3396,
RX: undefined,
IM3: -67.27088,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2110.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.6186
},
{
frequency: 2110.7104,
RX: undefined,
IM3: undefined,
IM5: -138.41663,
IM7: undefined,
IM9: undefined
},
{
frequency: 2110.7385,
RX: undefined,
IM3: -66.770294,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2110.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -209.16083,
IM9: undefined
},
{
frequency: 2111.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.53445
},
{
frequency: 2111.2024,
RX: undefined,
IM3: -66.269554,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2111.2104,
RX: undefined,
IM3: undefined,
IM5: -138.17326,
IM7: undefined,
IM9: undefined
},
{
frequency: 2111.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -209.03381,
IM9: undefined
},
{
frequency: 2111.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.45474
},
{
frequency: 2111.7024,
RX: undefined,
IM3: -65.81442,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2111.7104,
RX: undefined,
IM3: undefined,
IM5: -137.95259,
IM7: undefined,
IM9: undefined
},
{
frequency: 2111.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.916,
IM9: undefined
},
{
frequency: 2112.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.3798
},
{
frequency: 2112.2024,
RX: undefined,
IM3: -65.43557,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2112.2104,
RX: undefined,
IM3: undefined,
IM5: -137.75656,
IM7: undefined,
IM9: undefined
},
{
frequency: 2112.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.80823,
IM9: undefined
},
{
frequency: 2112.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.30984
},
{
frequency: 2112.7024,
RX: undefined,
IM3: -65.12428,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2112.7104,
RX: undefined,
IM3: undefined,
IM5: -137.58661,
IM7: undefined,
IM9: undefined
},
{
frequency: 2112.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.71117,
IM9: undefined
},
{
frequency: 2113.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.24515
},
{
frequency: 2113.2024,
RX: undefined,
IM3: -64.874855,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2113.2104,
RX: undefined,
IM3: undefined,
IM5: -137.44376,
IM7: undefined,
IM9: undefined
},
{
frequency: 2113.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.62532,
IM9: undefined
},
{
frequency: 2113.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.18582
},
{
frequency: 2113.7024,
RX: undefined,
IM3: -64.68966,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2113.7104,
RX: undefined,
IM3: undefined,
IM5: -137.3287,
IM7: undefined,
IM9: undefined
},
{
frequency: 2113.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.55098,
IM9: undefined
},
{
frequency: 2114.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.13196
},
{
frequency: 2114.2024,
RX: undefined,
IM3: -64.56652,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2114.2104,
RX: undefined,
IM3: undefined,
IM5: -137.24168,
IM7: undefined,
IM9: undefined
},
{
frequency: 2114.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.48825,
IM9: undefined
},
{
frequency: 2114.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.08353
},
{
frequency: 2114.7024,
RX: undefined,
IM3: -64.502884,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2114.7104,
RX: undefined,
IM3: undefined,
IM5: -137.18253,
IM7: undefined,
IM9: undefined
},
{
frequency: 2114.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.43706,
IM9: undefined
},
{
frequency: 2115.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.04053
},
{
frequency: 2115.2024,
RX: undefined,
IM3: -64.49744,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2115.2104,
RX: undefined,
IM3: undefined,
IM5: -137.15071,
IM7: undefined,
IM9: undefined
},
{
frequency: 2115.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.39713,
IM9: undefined
},
{
frequency: 2115.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -279.00275
},
{
frequency: 2115.7024,
RX: undefined,
IM3: -64.55007,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2115.7104,
RX: undefined,
IM3: undefined,
IM5: -137.14528,
IM7: undefined,
IM9: undefined
},
{
frequency: 2115.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.368,
IM9: undefined
},
{
frequency: 2116.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -278.97006
},
{
frequency: 2116.2024,
RX: undefined,
IM3: -64.661865,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2116.2104,
RX: undefined,
IM3: undefined,
IM5: -137.16487,
IM7: undefined,
IM9: undefined
},
{
frequency: 2116.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.34903,
IM9: undefined
},
{
frequency: 2116.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -278.9422
},
{
frequency: 2116.7024,
RX: undefined,
IM3: -64.83514,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2116.7104,
RX: undefined,
IM3: undefined,
IM5: -137.20772,
IM7: undefined,
IM9: undefined
},
{
frequency: 2116.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.33943,
IM9: undefined
},
{
frequency: 2117.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -278.91882
},
{
frequency: 2117.2024,
RX: undefined,
IM3: -65.07102,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2117.2104,
RX: undefined,
IM3: undefined,
IM5: -137.27151,
IM7: undefined,
IM9: undefined
},
{
frequency: 2117.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.33823,
IM9: undefined
},
{
frequency: 2117.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -278.89963
},
{
frequency: 2117.7024,
RX: undefined,
IM3: -65.350945,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2117.7104,
RX: undefined,
IM3: undefined,
IM5: -137.35349,
IM7: undefined,
IM9: undefined
},
{
frequency: 2117.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.34433,
IM9: undefined
},
{
frequency: 2118.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -278.8842
},
{
frequency: 2118.2024,
RX: undefined,
IM3: -65.673294,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2118.2104,
RX: undefined,
IM3: undefined,
IM5: -137.45055,
IM7: undefined,
IM9: undefined
},
{
frequency: 2118.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.35652,
IM9: undefined
},
{
frequency: 2118.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -278.8721
},
{
frequency: 2118.7024,
RX: undefined,
IM3: -66.042595,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2118.7104,
RX: undefined,
IM3: undefined,
IM5: -137.55927,
IM7: undefined,
IM9: undefined
},
{
frequency: 2118.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.37352,
IM9: undefined
},
{
frequency: 2119.0444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -278.86288
},
{
frequency: 2119.2024,
RX: undefined,
IM3: -66.46455,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2119.2104,
RX: undefined,
IM3: undefined,
IM5: -137.67593,
IM7: undefined,
IM9: undefined
},
{
frequency: 2119.3105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.39397,
IM9: undefined
},
{
frequency: 2119.5444,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: undefined,
IM9: -278.85617
},
{
frequency: 2119.7024,
RX: undefined,
IM3: -66.946365,
IM5: undefined,
IM7: undefined,
IM9: undefined
},
{
frequency: 2119.7104,
RX: undefined,
IM3: undefined,
IM5: -137.79637,
IM7: undefined,
IM9: undefined
},
{
frequency: 2119.8105,
RX: undefined,
IM3: undefined,
IM5: undefined,
IM7: -208.41647,
IM9: undefined
}
]
}