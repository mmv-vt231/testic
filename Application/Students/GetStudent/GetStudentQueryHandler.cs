using Contracts.DTOs;
using Domain.Entities;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Students.GetStudent
{
    public class GetStudentQueryHandler : IRequestHandler<GetStudentQuery, GetStudentResponseDTO?>
    {
        private readonly IStudentRepository _studentRepository;

        public GetStudentQueryHandler(IStudentRepository studentRepository)
        {
            _studentRepository = studentRepository;
        }

        public async Task<GetStudentResponseDTO?> Handle(GetStudentQuery request, CancellationToken cancellationToken)
        {
            var student = await _studentRepository.GetByIdAsync(request.Id);

            if (student is not null)
            {
                return new GetStudentResponseDTO(
                    student.Id,
                    student.FullName,
                    student.Email,
                    student.GroupId
                );
            };

            return null;
        }
    }
}
