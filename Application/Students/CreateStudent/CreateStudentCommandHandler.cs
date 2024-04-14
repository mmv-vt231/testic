using Domain.Entities;
using Domain.Errors;
using Domain.Repositories;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Students.CreateStudent
{
    public class CreateStudentCommandHandler : IRequestHandler<CreateStudentCommand>
    {
        private readonly IGroupRepository _groupRepository;
        private readonly IStudentRepository _studentRepository;

        public CreateStudentCommandHandler(
            IGroupRepository groupRepository,
            IStudentRepository studentRepository)
        {
            _groupRepository = groupRepository;
            _studentRepository = studentRepository;
        }

        public async Task Handle(CreateStudentCommand request, CancellationToken cancellationToken)
        {
            var group = await _groupRepository.GetByIdAsync(request.GroupId);

            if (group is null)
            {
                throw GroupsErrors.GroupNotFound;
            }

            var student = new Student
            {
                FullName = request.FullName,
                Email = request.Email,
                GroupId = request.GroupId
            };

            await _studentRepository.CreateAsync(student);
        }
    }
}
