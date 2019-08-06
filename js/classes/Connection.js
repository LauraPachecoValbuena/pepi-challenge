function Connection (from, to, cost) {
    this.from = from;
    this.to = to;
    this.cost = 0;

    if (cost) {
        this.cost = cost;
    }

    Connection.prototype.getFrom = function() {
        return this.from;
    }

    Connection.prototype.setFrom = function(from) {
        this.from = from;
    }

    Connection.prototype.getTo = function() {
        return this.to;
    }

    Connection.prototype.setTo = function(to) {
        this.to = to;
    }

    Connection.prototype.getCost = function() {
        return this.cost;
    }

    Connection.prototype.setCost = function(cost) {
        this.cost = cost;
    }
}