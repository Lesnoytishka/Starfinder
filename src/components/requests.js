let server = "http://localhost:9991";

let weapon = "/weapon";
let weaponGrenades = "/getAllGrenades";
let weaponWeaponBarreledLong = "/getAllLong";
let weaponWeaponBarreledShort = "/getAllShort";
let weaponWeaponHeavy = "/getAllHeavy";
let weaponWeaponMeleeHighTech = "/getAllHighTeachMelee";
let weaponWeaponMeleeSimple = "/getAllSimpleMelee";
let weaponWeaponSniper = "/getAllSniper";
let weaponSpecial = "/getAllSpecial";
let weaponAmmunition = "/getAllAmmunition";
let weaponWeaponType = "/getAllWeaponType";
let weaponWeaponDamageType = "/getAllWeaponDamageType";

const requestHandler = {
  weapon: 
    {
      Grenades: server+weapon+weaponGrenades,
      WeaponBarreledLong: server+weapon+weaponWeaponBarreledLong,
      WeaponBarreledShort: server+weapon+weaponWeaponBarreledShort,
      WeaponHeavy: server+weapon+weaponWeaponHeavy,
      WeaponMeleeHighTech: server+weapon+weaponWeaponMeleeHighTech,
      WeaponMeleeSimple: server+weapon+weaponWeaponMeleeSimple,
      WeaponSniper: server+weapon+weaponWeaponSniper,
      Special: server+weapon+weaponSpecial,
      Ammunition: server+weapon+weaponAmmunition,
      WeaponType: server+weapon+weaponWeaponType,
      WeaponDamageType: server+weapon+weaponWeaponDamageType
    }

};

export default requestHandler;