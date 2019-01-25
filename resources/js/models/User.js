import linq from 'linq'
import {
    snakeToCamel,
    camelToSnake
} from '../utility/stringUtility'
import Model from './Parents/Model'

const FILLABEL = [
    'id',
    'name',
    'email',
    'password'
]

export default class User extends Model {

    constructor(data = null) {
        super()
        this.originalData = data

        this.id = 0
        this.name = ''
        this.email = ''
        this.password = ''
        this.createdAt = ''

        if (data) {
            this.create()
        }
    }

    get _model() {
        return 'User'
    }

    /*view model 作成
    　スネークケースー＞キャメルケース
    */
    create() {
        linq.from(this.data)
            .select(x => {
                x.key = camelToSnake(x.key)
                return x
            })
            .where(x => this.hasOwnProperty(snakeToCamel(x.key)))
            .select(x => {
                const key = snakeToCamel(x.key)

                if (typeof this[key] === 'number') {
                    this[key] = Number(x.value)
                    return
                }

                this[key] = x.value
                return x
            })
            .toArray()
    }

    get data() {
        return this.originalData
    }

    //FILLABEL取得
    getPostable() {
        return linq.from(this)
            .where(x => linq.from(FILLABEL).any(xs => xs === x.key))
            .where(x => x.value)
            .select(x => {
                return {
                    key: camelToSnake(x.key),
                    value: x.value
                }
            })
            .toObject('$.key', '$.value')
    }

}
