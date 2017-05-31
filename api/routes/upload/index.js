const router = express.Router();
const controller = require('./controller')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const uploadIdInfo = upload.fields([
  {name: 'photos', maxCount: 2},
])

router.post('/photos', uploadIdInfo, box.pc('idNo', 'name'), controller.upload)
router.post('/test', box.pc('idNo'), controller.test)

module.exports = router;
