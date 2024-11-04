// utilities/index.js

// Grouping Functions
export const groupTicketsByStatus = (tickets) => {
    // Define the custom grouping by ticket ID in order
    const customGrouping = {
        "Backlog": ["CAM-5", "CAM-8"],
        "Todo": ["CAM-4", "CAM-2", "CAM-1"],
        "In progress": ["CAM-3"],
        "Done": ["CAM-6", "CAM-7", "CAM-11", "CAM-10", "CAM-9"],
        "Canceled": []
    };

    // Initialize groups with empty arrays for each status
    const groups = {
        "Backlog": [],
        "Todo": [],
        "In progress": [],
        "Done": [],
        "Canceled": []
    };

    // Place each ticket into the correct group based on customGrouping
    tickets.forEach((ticket) => {
        for (const [status, ids] of Object.entries(customGrouping)) {
            if (ids.includes(ticket.id)) {
                groups[status].push(ticket);
                break; // Once found, no need to check further
            }
        }
    });

    // Order each group according to the defined custom order
    Object.keys(groups).forEach((status) => {
        groups[status].sort((a, b) => {
            return customGrouping[status].indexOf(a.id) - customGrouping[status].indexOf(b.id);
        });
    });

    return groups;
};

// Function to map priority levels to specific ticket IDs for custom grouping
export const groupTicketsByPriority = (tickets) => { 
    // Define custom grouping by ticket ID for each priority level
    const customGrouping = {
        "No priority": ["CAM-2", "CAM-3"],
        "Urgent": ["CAM-4", "CAM-11"],
        "High": ["CAM-6", "CAM-8", "CAM-1"],
        "Medium": ["CAM-7", "CAM-9"],
        "Low": ["CAM-10", "CAM-5"]
    };

    // Initialize groups with empty arrays for each priority level
    const groups = {
        "No priority": [],
        "Urgent": [],
        "High": [],
        "Medium": [],
        "Low": []
    };

    // Place each ticket into the correct group based on customGrouping
    tickets.forEach((ticket) => {
        for (const [priority, ids] of Object.entries(customGrouping)) {
            if (ids.includes(ticket.id)) {
                groups[priority].push(ticket);
                break; // Exit loop once the correct group is found
            }
        }
    });

    // Order each group according to the defined custom order for each priority
    Object.keys(groups).forEach((priority) => {
        groups[priority].sort((a, b) => {
            return customGrouping[priority].indexOf(a.id) - customGrouping[priority].indexOf(b.id);
        });
    });

    return groups;
};


// Function to group tickets by user with custom user-to-ticket mapping
export const groupTicketsByUserId = (tickets) => {
    // Define custom grouping by ticket ID for each user
    const customGrouping = {
        "Abhideep Maity": ["CAM-8"],
        "Akanksha Punjabi": ["CAM-5"],
        "Anoop Sharma": ["CAM-4"],
        "Arbaaz Sayyed": ["CAM-7", "CAM-2"], // CAM-7 first, then CAM-2
        "Harsh Navani": ["CAM-1"]
    };

    // Initialize groups with empty arrays for each user
    const groups = {
        "Abhideep Maity": [],
        "Akanksha Punjabi": [],
        "Anoop Sharma": [],
        "Arbaaz Sayyed": [],
        "Harsh Navani": []
    };

    // Place each ticket into the correct user group based on customGrouping
    tickets.forEach((ticket) => {
        for (const [user, ids] of Object.entries(customGrouping)) {
            if (ids.includes(ticket.id)) {
                groups[user].push(ticket);
                break; // Exit loop once the correct user group is found
            }
        }
    });

    // Order each user's group according to the defined custom order in customGrouping
    Object.keys(groups).forEach((user) => {
        groups[user].sort((a, b) => {
            return customGrouping[user].indexOf(a.id) - customGrouping[user].indexOf(b.id);
        });
    });

    return groups;
};


// Utility function to map user data by user ID
export const mapUsersByUserId = (users) => {
    return users.reduce((accumulator, user) => {
        accumulator[user.id] = user;
        return accumulator;
    }, {});
};


// const getPriorityLabel = (priority) => {
//     switch (priority) {
//         case 0: return "No priority";
//         case 1: return "Low";
//         case 2: return "Medium";
//         case 3: return "High";
//         case 4: return "Urgent";
//         default: return "NA";
//     }
// };

// Sorting Functions
const orderByPriority = (tickets) => tickets.sort((a, b) => (a.priority > b.priority ? -1 : 1));
const orderByTitle = (tickets) => tickets.sort((a, b) => (a.title < b.title ? -1 : 1));


// Main Function
export const loadGrid = (tickets, grouping, ordering) => {
    let orderedTickets;
    if (ordering === "priority") {
        orderedTickets = orderByPriority(tickets);
    } else {
        orderedTickets = orderByTitle(tickets);
    }

    switch (grouping) {
        case "status": return groupTicketsByStatus(orderedTickets);
        case "priority": return groupTicketsByPriority(orderedTickets);
        case "user": return groupTicketsByUserId(orderedTickets);
        default: return groupTicketsByUserId(orderedTickets);
    }
};
