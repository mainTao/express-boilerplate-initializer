exports.storeFiles = files => {
  return Promise.each(files.photos, item => {
    return fs.renameAsync(item.path, item.path + '_' + item.originalname)
  })
}
