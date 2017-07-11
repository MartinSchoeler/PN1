import swal from 'sweetalert2'


Template.Lists.helpers({
    items: () => {
        return Lists.find();
    }
});

Template.Lists.events({ 
    'click .add-list'(e) {
        e.preventDefault(); 
        const query = {
            place: $('#a').val(),
            date: $('#b').val(),
            finalPrice: $('#c').val()
        }
        Lists.insert(query);
    }
});