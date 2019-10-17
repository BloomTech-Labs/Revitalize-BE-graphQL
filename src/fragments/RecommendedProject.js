export const recommendedProject = `
    fragment recommendedProject on Project {
        id
        slug
        name
        description
        country
        state
        city
        zip
        address
        goalAmount
        duration
        difficulty
        startDate
        featuredImage
        profile {
            id
        }
        donations {
            id
        }
        comments {
            id
        }
        likes {
            id
        }
        images {
            id
        }
        trades {
            id
        }
        applicants {
            id
        }
        tradeMasters {
            id
        }
        students {
            id
        }
        tasks {
            id
        }
    }
`
