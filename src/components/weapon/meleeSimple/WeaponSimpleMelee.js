import React, {useState} from 'react';
import requestHandler from '../../requests';
import {titleRu} from './meleeSimpleFields';

function WeaponSimpleMelee(props) {
  const [t1, setT1] = useState();
  const local = props.getLa

  function task1() {
    console.log(requestHandler.weapon.WeaponMeleeSimple)
    fetch(requestHandler.weapon.WeaponMeleeSimple)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setT1(data.map(el =>
          <tr key={el.id} className="dark">
            {/*<td>{el.current()}</td>*/}
            <td>{el.titleRu}</td>
            <td>{el.titleEn}</td>
            <td>
              {el.damage} <span
              title={el.damageType.titleRu + '\n' + el.damageType.descriptionRu}>{el.damageType.shortTitleRu}
              </span>
            </td>
            <td>{el.handCount}</td>
            <td>{el.lvl}</td>
            <td>{el.price}</td>
            <td>{el.weight}</td>
            <td>{el.critical === null ? "" :
              (el.critical.titleRu === null ? "" : el.critical.titleRu)
              + ((el.critical.titleRu !== null && el.critical.titleEn !== null) ? ' | ' : '') +
              (el.critical.titleEn === null ? "" : el.critical.titleEn)}</td>
            <td>{el.special}</td>
          </tr>));
      });
  }
const sttt = {
    color: "red"
}
  return (
    <div className="table-data" >
      <button onClick={task1}>get table data</button>
      <table className="table table-dark table-hover">
        <thead>
        <caption style={sttt}>WeaponSimpleMelee</caption>
        <tr>
          <th>titleRu</th>
          <th>titleEn</th>
          <th>damage</th>
          <th>handCount</th>
          <th>lvl</th>
          <th>price</th>
          <th>weight</th>
          <th>critical</th>
          <th>special</th>
        </tr>
        </thead>
        <tbody>
        {t1}
        </tbody>
      </table>
    </div>
  );
}

export default WeaponSimpleMelee;