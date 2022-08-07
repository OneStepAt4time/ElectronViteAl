import type {Nullable} from 'vitest';

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const file = path.resolve(__dirname + './../src/alloggiati.db');
console.log(file);
const db = new sqlite3.Database('alloggiati.db');

export async function getTable(tableName: string) {
  const sql = `SELECT * FROM ${tableName}`;
  return new Promise((resolve, reject) => {
    db.all(sql, (err: string, rows: Nullable<any>) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}
export async function getTipoAlloggiato(codice: Nullable<string> = null, tableName = 'tipo_alloggiato') {
    let sql = `SELECT * FROM ${tableName}`;
    if (codice) {
        sql += ` WHERE codice = '${codice}'`;
    }
    // console.log(sql);
    return new Promise((resolve, reject) => {
        db.all(sql, (err: string, rows: Nullable<any>) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

export async function getStato(codice: Nullable<string> = null, tableName = 'stati') {
  let sql = `SELECT * FROM ${tableName}`;
  if (codice) {
    sql += ` WHERE codice = '${codice}'`;
  }
  // console.log(sql);
  return new Promise((resolve, reject) => {
    db.all(sql, (err: string, rows: Nullable<any>) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

export async function getComune(codice: Nullable<string> = null, tableName = 'comuni') {
  let sql = `SELECT C.codice, c.descrizione, SUBSTR(REPLACE(c.dataFineVal, '/', '-'), 1, 10) AS data_fine_validita, IFNULL(p.descrizione, '')  || " [" || c.provincia || "]" AS desc_provincia FROM ${tableName} c LEFT JOIN province p USING (provincia) `;
  if (codice) {
    sql += ` WHERE codice = '${codice}'`;
  }
  // console.log(sql);
  return new Promise((resolve, reject) => {
    db.all(sql, (err: string, rows: Nullable<any>) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

export async function getDocumento(codice: Nullable<string> = null, tableName = 'documenti') {
  let sql = `SELECT * FROM ${tableName}`;
  if (codice) {
    sql += ` WHERE codice = '${codice}'`;
  }
  // console.log(sql);
  return new Promise((resolve, reject) => {
    db.all(sql, (err: string, rows: Nullable<any>) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}

export async function getTableAlloggiati(where_date: Nullable<string> = new Date().toISOString().substring(0, 10), tableName = 'alloggiati') {
  let sql = `SELECT * FROM ${tableName} WHERE true `;
  // console.log(sql);
  if (where_date) {
    sql += ` AND data_arrivo = '${where_date}'`;
  }
  console.log((sql));
  return new Promise((resolve, reject) => {
    db.all(sql, (err: string, rows: Nullable<any>) => {
      if (err) {
        reject(err);
      }
      resolve(rows);
    });
  });
}


// insert into main.tipo_alloggiato (codice, descrizione) values (16, 'OSPITE SINGOLO');
// insert into main.stati (codice, descrizione, provincia, dataFineVal) values (100000100, 'ITALIA', 'ES', null);
// insert into main.comuni (codice, descrizione, provincia, dataFineVal) values (401001001, 'AGLIE''', 'TO', null);
// insert into main.documenti (codice, descrizione) values ('IDENT', 'CARTA DI IDENTITA''');
// insert into main.province (provincia, descrizione) values ('AG', 'Agrigento');
