!function a(o,n,s){function i(u,r){if(!n[u]){if(!o[u]){var l="function"==typeof require&&require;if(!r&&l)return l(u,!0);if(e)return e(u,!0);throw new Error("Cannot find module '"+u+"'")}var t=n[u]={exports:{}};o[u][0].call(t.exports,function(a){var n=o[u][1][a];return i(n?n:a)},t,t.exports,a,o,n,s)}return n[u].exports}for(var e="function"==typeof require&&require,u=0;u<s.length;u++)i(s[u]);return i}({1:[function(a,o,n){function s(){var a=[],o=[{aluno:"Amanda Barbosa Costa",notaPercentual:.474375,linhas:618,arquivos:1,os:"Windows",sexo:"Feminino"},{aluno:"Bianca Vaz Micherino",notaPercentual:1.0000000000000002,linhas:618,arquivos:12,os:"Windows",sexo:"Feminino"},{aluno:"Bruna Grazielle Oselieri Lopes",notaPercentual:.43,linhas:134,arquivos:1,os:"Windows",sexo:"Feminino"},{aluno:"Fabricio Fraga Rezende",notaPercentual:1.1643750000000002,linhas:2311,arquivos:1,os:"Windows",sexo:"Masculino"},{aluno:"Gabriel Faria Padovani",notaPercentual:.555625,linhas:479,arquivos:1,os:"Windows",sexo:"Masculino"},{aluno:"Gabriel Goncalves Schmidt",notaPercentual:.11562499999999998,linhas:138,arquivos:1,os:"OSX",sexo:"Masculino"},{aluno:"Gabriel Pires de Miranda Magalh�es",notaPercentual:1.7743750000000005,linhas:1306,arquivos:15,os:"Windows",sexo:"Masculino"},{aluno:"Higor Coimbra Amorim",notaPercentual:.9143750000000002,linhas:479,arquivos:1,os:"Windows",sexo:"Masculino"},{aluno:"Larissa de C�ssia Nazar� Bicalho",notaPercentual:.42000000000000004,linhas:256,arquivos:1,os:"Windows",sexo:"Feminino"},{aluno:"Leonardo Carvalho Tereza",notaPercentual:.9400000000000002,linhas:669,arquivos:2,os:"Windows",sexo:"Masculino"},{aluno:"Lindley Werner Soares Vieira",notaPercentual:1.1500000000000004,linhas:669,arquivos:1,os:"Linux",sexo:"Masculino"},{aluno:"LUAN TAFAREL DA SILVA",notaPercentual:.53,linhas:263,arquivos:1,os:"Windows",sexo:"Masculino"},{aluno:"Lucas Nascimento Huati Corr�a",notaPercentual:1.2400000000000002,linhas:1077,arquivos:20,os:"Linux",sexo:"Masculino"},{aluno:"LUCAS SILVESTRE VIANA",notaPercentual:1.0400000000000003,linhas:585,arquivos:3,os:"Windows",sexo:"Masculino"},{aluno:"LUCIAN HENRIQUE PEREIRA GOMES",notaPercentual:.7343750000000001,linhas:385,arquivos:4,os:"Windows",sexo:"Masculino"},{aluno:"Luiz Fl�vio Costa de Lima",notaPercentual:.44062500000000004,linhas:137,arquivos:3,os:"Linux",sexo:"Masculino"},{aluno:"Maria Ver�nica Santos Soares",notaPercentual:1.0700000000000003,linhas:608,arquivos:13,os:"Windows",sexo:"Feminino"},{aluno:"Matheus de Almeida Rosa",notaPercentual:1.3543750000000003,linhas:832,arquivos:1,os:"Windows",sexo:"Masculino"},{aluno:"Mauro Floriano dos Santos",notaPercentual:.9500000000000002,linhas:506,arquivos:1,os:"Linux",sexo:"Masculino"},{aluno:"N�colas Arruda Maduro",notaPercentual:1.2143750000000002,linhas:610,arquivos:1,os:"Windows",sexo:"Masculino"},{aluno:"Pedro Henrique Silva",notaPercentual:.9743750000000001,linhas:552,arquivos:1,os:"Windows",sexo:"Masculino"},{aluno:"Ramon Felipe de Oliveira Costa",notaPercentual:.8643750000000001,linhas:821,arquivos:1,os:"Windows",sexo:"Masculino"},{aluno:"Renan Mateus Bernardo do Nascimento",notaPercentual:.9443750000000002,linhas:428,arquivos:6,os:"Windows",sexo:"Masculino"},{aluno:"Samuel Cury Prazeres Vaz de Melo",notaPercentual:.8743750000000001,linhas:428,arquivos:1,os:"Linux",sexo:"Masculino"},{aluno:"Saulo Antunes Silva",notaPercentual:.9106250000000002,linhas:515,arquivos:12,os:"Linux",sexo:"Masculino"},{aluno:"Thales Bacelar Nascimento",notaPercentual:1.7300000000000004,linhas:714,arquivos:29,os:"Linux",sexo:"Masculino"},{aluno:"Tulio Mitre Perdigao",notaPercentual:.964375,linhas:511,arquivos:1,os:"Linux",sexo:"Masculino"},{aluno:"Victor Balbo de Oliveira",notaPercentual:1.4743750000000004,linhas:907,arquivos:4,os:"Windows",sexo:"Masculino"},{aluno:"Vin�cius Henrique Silveira",notaPercentual:.8243750000000002,linhas:483,arquivos:4,os:"Windows",sexo:"Feminino"},{aluno:"Vinicius Magalh�es D' Assun��o",notaPercentual:1.2543750000000002,linhas:1117,arquivos:14,os:"Windows",sexo:"Masculino"},{aluno:"WENDELL FERREIRA DOS SANTOS",notaPercentual:1.0631250000000003,linhas:1249,arquivos:22,os:"Linux",sexo:"Masculino"}];return["Windows","Linux","OSX"].forEach(function(n){var s=o.filter(function(a){return a.os===n});s=s.map(function(a){return{x:a.linhas,y:a.notaPercentual,size:a.arquivos/23,shape:"Masculino"===a.sexo?"circle":"triangle-down"}}),a.push({key:n,values:s})}),a}nv.addGraph(function(){var a=nv.models.scatterChart().showDistX(!0).showDistY(!0).color(d3.scale.category10().range());a.tooltipContent(function(a){return"<h3>"+a+"</h3>"}),a.xAxis.tickFormat(d3.format(".02f")),a.yAxis.tickFormat(d3.format(".02f"));var o=s();return d3.select("#bubble-chart-os svg").datum(o).call(a),nv.utils.windowResize(a.update),a})},{}]},{},[1]);