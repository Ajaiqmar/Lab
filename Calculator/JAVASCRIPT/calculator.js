var msg='';
var ari='';
var nu=[],op=[],t=0,fnu="";

function answer(){
	if(nu.length>op.length)
	{
		var su=nu[0],i;
		for(i=1;i<nu.length;i++)
		{
			console.log(op[i-1]);
			if(op[i-1]=="+")
			{
				su=su+nu[i];
			}
			if(op[i-1]=='-')
			{
				su=su-nu[i];
			}
			if(op[i-1]=="x")
			{
				su=su*nu[i];
			}	
			if(op[i-1]=='/')
			{
				su=su/nu[i];
			}
			if(op[i-1]=='%')
			{
				su=su%nu[i];
			}
		}
		document.getElementById('output').innerHTML=su.toLocaleString();
		nu.pop();
	}
	else
	{
		document.getElementById('output').innerHTML="";
	}
}

function arithmetic(msg){
	
	if((msg!='+' && msg!='-' && msg!='x' && msg!='/' && msg!='%') && (ari.length==0))
	{
		ari=ari+msg;
		document.getElementById('input').innerHTML=ari;
		fnu=fnu+msg;
	}
	else if(ari.length!=0)
	{
		if((msg=='+' || msg=='-' || msg=='x' || msg=='/' || msg=='%') && (ari[(ari.length)-1]!='+' && ari[(ari.length)-1]!='-' && ari[(ari.length)-1]!='x' && ari[(ari.length)-1]!='/' && ari[(ari.length)-1]!='%'))
		{
			nu.push(parseInt(fnu));
			fnu=""
			op.push(msg);
			ari=ari+msg;
			t=0;
		}
		else if((msg=='+' || msg=='-' || msg=='x' || msg=='/' || msg=='%') && (ari[(ari.length)-1]=='+' || ari[(ari.length)-1]=='-' || ari[(ari.length)-1]=='x' || ari[(ari.length)-1]=='/' || ari[(ari.length)-1]=='%'))
		{
			var temp=ari.slice(0,(ari.length)-1);
			op.pop();
			op.push(msg);
			ari=temp+msg;
		}
		else if(msg=='=' && fnu.length!=0)
		{
			nu.push(parseInt(fnu));
			answer();
			return;
		}
		else if(msg=='=' && fnu.length==0)
		{
			answer();
			return;
		}
		else
		{
			fnu=fnu+msg;
			ari=ari+msg;
		}
		document.getElementById('input').innerHTML=ari;
	}
}

function clear_space(){
	document.getElementById('output').innerText="";
	document.getElementById('input').innerText="";
	ari="";
	nu.length=0;
	op.length=0;
	fnu="";
}

function backspace()
{
	if(ari[(ari.length)-1]=='+' || ari[(ari.length)-1]=='-' || ari[(ari.length)-1]=='x' || ari[(ari.length)-1]=='/' || ari[(ari.length)-1]=='%')
	{
		ari=ari.slice(0,(ari.length)-1);
		op.pop();
		fnu=nu[nu.length-1].toString();
		nu.pop();
		document.getElementById('input').innerHTML=ari;
	}
	else
	{
		if(fnu.length==0)
		{
			fnu=nu[nu.length-1].toString();
			nu.pop()
			fnu=fnu.slice(0,fnu.length-1);
			ari=ari.slice(0,ari.length-1);
			document.getElementById('input').innerHTML=ari;
		}
		else
		{
			fnu=fnu.slice(0,fnu.length-1);
			ari=ari.slice(0,ari.length-1);
			document.getElementById('input').innerHTML=ari;
		}
	}
}
