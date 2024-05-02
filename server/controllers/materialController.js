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


  // async create(req, res, next) {
  //   try {
  //     let {title, materialCategoryMaterialCategoryID} = req.body
  //     const {file} = req.files
  //     let fileName = uuid.v4() + ".docx"
  //     file.mv(path.resolve(__dirname, '..', 'static', fileName))

  //   const material = await Material.create({title, materialCategoryMaterialCategoryID, file: fileName})

  //   return res.json(material)
  //   } catch (e){
  //     next(ApiError.badRequest(e.message))
  //   }
    
  // }
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
}

module.exports = new MaterialController()