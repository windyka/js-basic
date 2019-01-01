let role = 'guest';

switch (role) {
  case 'guest':
    console.log('Guest');
    break;

  case 'moderator':
    console.log('Moderator');
    break;

  case 'user':
    console.log('User');
    break;

  default:
    console.log('Unknown User');
}

//commonly using if else statement
if (role === 'user') console.log('User');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');
