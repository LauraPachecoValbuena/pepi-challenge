function City (name,reward,base) {
    this.name = name;
    this.reward = 0;
    this.base = false;

    if (reward){
        this.reward = reward;
    }

    if (base){
        this.base = base;
    }

    City.prototype.getName = function() {
        return this.name;
    }

    City.prototype.setName = function(name) {
        this.name = name;
    }

    City.prototype.getReward = function() {
        return this.reward;
    }

    City.prototype.setReward = function(reward) {
        this.reward = reward;
    }

    City.prototype.getBase = function() {
        return this.base;
    }

    City.prototype.setBase = function(base) {
        this.base = base;
    }
}