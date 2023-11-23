switch (browser) {
    case 'Edge':
      alert( "Edge를 사용하고 계시네요!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( '저희 서비스가 지원하는 브라우저를 사용하고 계시네요.' );
      break;
  
    default:
      alert( '현재 페이지가 괜찮아 보이길 바랍니다!' );
  }

// to if statement
let browser;
if (browser == 'Edge') alert ("You are using Edge browser!");
else if (browser == 'Chrome' || browser == 'Firefox' || 'Safari' || 'Opera') alert ('You are using a browser that our service supports');
else alert ('Hope this page looks fine!');