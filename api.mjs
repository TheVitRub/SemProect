
class Persons {
    constructor(id, name, status, species, type, gender, origin, location, image, episode, url, created)
    {
     this.id = id
     this.name = name
     this.status = status
     this.species = species
     this.type = type
     this.gender = gender
     this.origin = origin
     this.location = location
     this.image = image
     this.episode = episode
     this.url = url
     this.created = created
    }
    getUrl(){
        return this.url
    }
}
class Planet {
    constructor(id, name, type, dimension, residents, url, created){
        this.id = id
        this.name = name
        this.type = type
        this.dimension = dimension
        this.url = url
        this.created = created
        this.residents = residents
    }
}


export {Persons, Planet}