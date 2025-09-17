var nameList = [
  'James', 'John', 'Robert', 'Michael', 'William',
  'David', 'Richard', 'Joseph', 'Thomas', 'Charles',
  'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark',
  'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua',
  'Kenneth', 'Kevin', 'Brian', 'George', 'Edward',
  'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan',
  'Jacob', 'Gary', 'Nicholas', 'Eric', 'Jonathan',
  'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon',
  'Benjamin', 'Samuel', 'Frank', 'Gregory', 'Raymond',
  'Alexander', 'Patrick', 'Jack', 'Dennis', 'Jerry',
  'Tyler', 'Aaron', 'Jose', 'Henry', 'Douglas',
  'Peter', 'Adam', 'Nathan', 'Zachary', 'Walter',
  'Harold', 'Kyle', 'Carl', 'Arthur', 'Gerald',
  'Roger', 'Keith', 'Jeremy', 'Terry', 'Lawrence',
  'Sean', 'Christian', 'Albert', 'Joe', 'Ethan',
  'Austin', 'Jesse', 'Willie', 'Billy', 'Bryan',
  'Bruce', 'Jordan', 'Ralph', 'Roy', 'Noah',
  'Dylan', 'Eugene', 'Wayne', 'Alan', 'Juan',
  'Louis', 'Russell', 'Gabriel', 'Bobby', 'Johnny',
  'Logan', 'Randy', 'Philip', 'Vincent', 'Glenn'
];

export function generateRandomName() {
    return  nameList[Math.floor(Math.random() * nameList.length)];
    
    };



export function randomMessage(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

