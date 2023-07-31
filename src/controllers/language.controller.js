import { getConnection } from "./../database/database";

const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM languages");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT * FROM languages WHERE id = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    if (id === undefined || name === undefined) {
      res.status(400).json({ message: "Bad Request." });
    }
    const language = { id, name };
    console.log(req.body);
    const connection = await getConnection();
    const result = await connection.query(
      "INSERT INTO languages SET ?",
      language
    );
    res.json({ message: "Lenguaje añadido" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateLanguage = async (req, res) => {
  try {
    const { id, name } = req.body;
    if (id === undefined || name === undefined) {
      res.status(400).json({ message: "Bad Request." });
    }
    const language = { id, name };
    const connection = await getConnection();
    const result = await connection.query(
      "UPDATE languages SET ? WHERE id = ?",
      [language, id]
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteLanguage = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM languages WHERE id = ?",
      id
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getLanguages,
  addLanguage,
  getLanguage,
  deleteLanguage,
  updateLanguage,
};
