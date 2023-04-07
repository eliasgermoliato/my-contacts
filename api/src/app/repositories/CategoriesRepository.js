const db = require('../../database');

class CategoriesRepository {
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await db.executeQuery(`SELECT * FROM categories ORDER BY name ${direction}`);
    return rows;
  }

  async findById(id) {
    const [row] = await db.executeQuery('SELECT * FROM categories WHERE id = $1', [id]);
    return row;
  }

  async findByName(name) {
    const [row] = await db.executeQuery('SELECT * FROM categories WHERE name = $1', [name]);
    return row;
  }

  async create({
    name,
  }) {
    const [row] = await db.executeQuery(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);
    return row;
  }

  async update(id, {
    name,
  }) {
    const [row] = await db.executeQuery(`
      UPDATE categories
      SET name = $1
      WHERE id = $2
      RETURNING *
    `, [name, id]);
    return row;
  }

  async delete(id) {
    const deleteOp = await db.executeQuery('DELETE FROM categories WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new CategoriesRepository();
