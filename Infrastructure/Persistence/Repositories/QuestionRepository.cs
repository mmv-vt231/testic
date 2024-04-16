using Domain.Entities;
using Domain.Repositories;
using Infrastructure.Persistence.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Persistence.Repositories
{
    public class QuestionRepository : Repository<Question>, IQuestionRepository
    {
        private new readonly ApplicationDbContext _context;

        public QuestionRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
