import linq from 'linq'
import {snakeToCamel, camelToSnake } from '../../utility/stringUtility'
import Form from 'vform'
import {arrayWrap} from '../../utility/arrayUtitlity'

export default class Model {

    constructor (data = null) {
        this.form = new Form
    }

    get hasError () {
        return Object.keys(this.form.errors.errors).length
    }

    get errors () {
        return linq.from(this.form.errors.errors)
            .select(x => {
                return arrayWrap(x.value)[0]
            })
            .toArray()
    }

    get busy () {
        return this.form.busy
    }

    getPostable () {}

    fill () {
        this.form = new Form(this.getPostable())
    }

    async post (url) {
        this.fill()
        return await this.form.post(url)
    }

    async delete (url) {
        this.fill()
        return await this.form.delete(url)
    }

    async patch (url) {
        this.fill()
        return await this.form.patch(url)
    }

}