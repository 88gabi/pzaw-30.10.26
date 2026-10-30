import { useState } from "react";




function App() {
  function Notatka({ nazwa, status }: Notatki) {
  const [status1, ustawstatus] = useState(status);
  //if(status==false)ustawl(licznik+1);
  return (
    <div><input type="checkbox" defaultChecked={status1} onChange={()=>ustawstatus(!status1)}></input>{nazwa}{status1 ? <span>TAK</span> : <span>NIE</span> }</div>
  );
}
const [licznik, ustawl] = useState(2);
  let notatki: Notatki[] = [];
  notatki.push({
    nazwa: "1",
    status: false
  });
  notatki.push({
    nazwa: "21",
    status: true
  });
  notatki.push({
    nazwa: "31",
    status: false
  });
 
  return (<div>
    <div>
      {notatki.map((o) => (
        <Notatka
          nazwa={o.nazwa}
          status={o.status}
        />
      ))}
    </div>
    <div><h1>NIEUKOŃCZONE</h1>
      {notatki.map((o) =>
        !o.status && <Notatka nazwa={o.nazwa} status={o.status}  />
      )}

      <span>{licznik}</span>
    </div>

  </div>
  );

}



interface Notatki {
  /**Nuer porządkowy */
  status: boolean;
  /**tytul */
  nazwa: string;
}

export default App;