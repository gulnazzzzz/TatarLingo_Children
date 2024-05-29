const uuid = require('uuid')
const path = require('path');
const {Material} = require('../models/models')
const ApiError = require('../error/ApiError')
class MaterialController {
  async create(req, res, next) {
    try {
      let { title, materialCategoryMaterialCategoryID } = req.body;

      // Проверка наличия файла в запросе
      if (!req.files || Object.keys(req.files).length === 0) {
        return next(ApiError.badRequest('No files were uploaded.'));
      }

      const { file } = req.files;

      // Проверка расширения файла
      const fileExtension = path.extname(file.name).toLowerCase();
      const allowedExtensions = ['.docx', '.pptx'];
      if (!allowedExtensions.includes(fileExtension)) {
        return next(ApiError.badRequest('Invalid file type. Only .docx and .pptx files are allowed.'));
      }

      // Генерация уникального имени файла и его сохранение
      let fileName = uuid.v4() + fileExtension;
      file.mv(path.resolve(__dirname, '..', 'static', 'materials', fileName));

      const material = await Material.create({
        title,
        materialCategoryMaterialCategoryID,
        file: fileName
      });

      return res.json(material);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let {materialCategoryMaterialCategoryID} = req.query
    let materials; 
    if (!materialCategoryMaterialCategoryID) {
      materials = await Material.findAll()
    }
    if (materialCategoryMaterialCategoryID) {
      materials = await Material.findAll({where: {materialCategoryMaterialCategoryID}})
    }
    return res.json(materials)
  }

  async getOne(req, res) {
    const {materialID} = req.params
    const material = await Material.findOne(
      {where: {materialID}},
    )
    return res.json(material)
  }

  

  async update(req, res, next) {
    try {
      const { materialID } = req.params;
      let { title, materialCategoryMaterialCategoryID } = req.body;

      const material = await Material.findOne({ where: { materialID } });
      if (!material) {
        return next(ApiError.notFound('Material not found'));
      }

      if (req.files && Object.keys(req.files).length > 0) {
        const { file } = req.files;
        const fileExtension = path.extname(file.name).toLowerCase();
        const allowedExtensions = ['.docx', '.pptx'];
        if (!allowedExtensions.includes(fileExtension)) {
          return next(ApiError.badRequest('Invalid file type. Only .docx and .pptx files are allowed.'));
        }

        const fileName = uuid.v4() + fileExtension;
        file.mv(path.resolve(__dirname, '..', 'static', 'materials', fileName));
        material.file = fileName;
      }

      material.title = title;
      material.materialCategoryMaterialCategoryID = materialCategoryMaterialCategoryID;
      await material.save();

      return res.json(material);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async delete(req, res, next) {
  try {
    const { materialID } = req.params;

    // Найдите материал по его ID
    const material = await Material.findOne({ where: { materialID } });
    if (!material) {
      return next(ApiError.notFound('Material not found'));
    }

    // Удалите материал из базы данных
    await material.destroy();

    return res.json({ message: 'Material deleted successfully' });
  } catch (e) {
    next(ApiError.badRequest(e.message));
  }
}
}

module.exports = new MaterialController()